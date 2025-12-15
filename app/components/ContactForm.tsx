"use client";

import { useState, useEffect } from "react";

interface ContactFormProps {
  variant?: "compact" | "full";
}

export default function ContactForm({ variant = "full" }: ContactFormProps) {
  const isCompact = variant === "compact";
  const [formLoadTime] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Store form reference before async operations (prevents null reference error)
    const form = e.currentTarget;

    // Time-based validation (bot protection)
    const timeToSubmit = Date.now() - formLoadTime;
    if (timeToSubmit < 3000) {
      setSubmitStatus({
        type: "error",
        message: "Please take your time filling out the form.",
      });
      return;
    }

    const formData = new FormData(form);
    const website = formData.get("website"); // Honeypot field

    // Reject if honeypot is filled (bot protection)
    if (website) {
      // Silent fail for bots
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          origin: formData.get("origin"),
          destination: formData.get("destination"),
          description: formData.get("description") || "",
          website: website, // Include honeypot
        }),
      });

      // Parse response as JSON
      const data = await response.json();

      // Check if response is successful - status 200-299 and success flag is true
      if (
        response.status >= 200 &&
        response.status < 300 &&
        data?.success === true
      ) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you! We'll contact you soon.",
        });
        // Reset form using stored reference (prevents null reference error)
        if (form) {
          form.reset();
        }
      } else {
        // Handle error response - show the error message from server if available
        setSubmitStatus({
          type: "error",
          message:
            data?.error ||
            data?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      // This catch block handles network errors, fetch failures, etc.
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Unable to submit form. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={isCompact ? "space-y-2.5" : "space-y-4"}
    >
      {/* Honeypot field - hidden from users, bots will fill this */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`${isCompact ? "p-2.5 text-sm" : "p-4"} rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className={`block ${
            isCompact ? "text-xs mb-1" : "text-sm mb-2"
          } font-medium text-gray-700`}
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={`w-full ${
            isCompact ? "px-3 py-2 text-sm" : "px-4 py-3"
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900`}
          placeholder="John Doe"
          style={{ backgroundColor: "#ffffff" }}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className={`block ${
            isCompact ? "text-xs mb-1" : "text-sm mb-2"
          } font-medium text-gray-700`}
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className={`w-full ${
            isCompact ? "px-3 py-2 text-sm" : "px-4 py-3"
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900`}
          placeholder="+91 1234567890"
          style={{ backgroundColor: "#ffffff" }}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className={`block ${
            isCompact ? "text-xs mb-1" : "text-sm mb-2"
          } font-medium text-gray-700`}
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`w-full ${
            isCompact ? "px-3 py-2 text-sm" : "px-4 py-3"
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900`}
          placeholder="john@example.com"
          style={{ backgroundColor: "#ffffff" }}
        />
      </div>
      <div>
        <label
          htmlFor="service"
          className={`block ${
            isCompact ? "text-xs mb-1" : "text-sm mb-2"
          } font-medium text-gray-700`}
        >
          Service Required *
        </label>
        <select
          id="service"
          name="service"
          required
          className={`w-full ${
            isCompact ? "px-3 py-2 text-sm" : "px-4 py-3"
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white text-gray-900 appearance-none cursor-pointer`}
          style={{ color: "#111827" }}
        >
          <option
            value=""
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Select a service
          </option>
          <option
            value="domestic-moving"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Domestic Moving
          </option>
          <option
            value="corporate-shifting"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Corporate Shifting
          </option>
          <option
            value="transportation"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Transportation Solution
          </option>
          <option
            value="storage"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Storage & Warehouse
          </option>
          <option
            value="automobile"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Automobile Shifting
          </option>
          <option
            value="packaging"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
          >
            Packaging Solution
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor="origin"
          className={`block ${
            isCompact ? "text-xs mb-1" : "text-sm mb-2"
          } font-medium text-gray-700`}
        >
          Moving From *
        </label>
        <input
          type="text"
          id="origin"
          name="origin"
          required
          className={`w-full ${
            isCompact ? "px-3 py-2 text-sm" : "px-4 py-3"
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900`}
          placeholder="City, State"
          style={{ backgroundColor: "#ffffff" }}
        />
      </div>
      <div>
        <label
          htmlFor="destination"
          className={`block ${
            isCompact ? "text-xs mb-1" : "text-sm mb-2"
          } font-medium text-gray-700`}
        >
          Moving To *
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          required
          className={`w-full ${
            isCompact ? "px-3 py-2 text-sm" : "px-4 py-3"
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900`}
          placeholder="City, State"
          style={{ backgroundColor: "#ffffff" }}
        />
      </div>
      {!isCompact && (
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900"
            placeholder="Tell us about your specific requirements..."
            style={{ backgroundColor: "#ffffff" }}
          ></textarea>
        </div>
      )}
      {isCompact && (
        <div>
          <label
            htmlFor="description"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={2}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all placeholder:text-gray-500 text-gray-900"
            placeholder="Additional details..."
            style={{ backgroundColor: "#ffffff" }}
          ></textarea>
        </div>
      )}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white ${
            isCompact ? "px-4 py-2.5 text-sm" : "px-8 py-4 text-lg"
          } rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? "Submitting..." : "Request Free Quote"}
        </button>
      </div>
    </form>
  );
}
