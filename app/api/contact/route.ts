import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (use Redis for production)
const submissions = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxSubmissions = 5;

  const userSubmissions = submissions.get(ip) || [];
  const recentSubmissions = userSubmissions.filter(
    (time) => now - time < windowMs
  );

  if (recentSubmissions.length >= maxSubmissions) {
    return false;
  }

  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Bot protection: Check honeypot field
    if (data.website) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    const { name, phone, email, service, origin, destination, description } =
      data;

    if (!name || !phone || !email || !service || !origin || !destination) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Service name mapping
    const serviceNames: { [key: string]: string } = {
      "domestic-moving": "Domestic Moving",
      "corporate-shifting": "Corporate Shifting",
      transportation: "Transportation Solution",
      storage: "Storage & Warehouse",
      automobile: "Automobile Shifting",
      packaging: "Packaging Solution",
    };

    const serviceName = serviceNames[service] || service;

    // Email content
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "gatirelocare@gmail.com",
      subject: `New Quote Request - ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Service Details</h3>
            <p><strong>Service Required:</strong> ${serviceName}</p>
            <p><strong>Moving From:</strong> ${origin}</p>
            <p><strong>Moving To:</strong> ${destination}</p>
          </div>

          ${
            description
              ? `
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Additional Details</h3>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the GatiRelocare Packers Movers contact form.</p>
            <p>Submitted from IP: ${ip}</p>
          </div>
        </div>
      `,
      text: `
New Quote Request - ${serviceName}

Contact Information:
Name: ${name}
Phone: ${phone}
Email: ${email}

Service Details:
Service Required: ${serviceName}
Moving From: ${origin}
Moving To: ${destination}

${description ? `Additional Details:\n${description}\n` : ""}

---
This email was sent from the GatiRelocare Packers Movers contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! We have received your request and will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
