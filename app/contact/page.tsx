import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Get Your Free Quote
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Ready to get moving? Contact us today for a personalized quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl p-8 md:p-12 border border-blue-200">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    Send us a Message
                  </span>
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-700 mb-4">
                  Available 24/7 for your convenience
                </p>
                <a
                  href="tel:+917014571878"
                  className="text-blue-600 font-medium hover:text-red-600 transition-colors"
                >
                  (+91) 7014571878
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-700 mb-4">
                  We&apos;ll respond within 24 hours
                </p>
                <a
                  href="mailto:gatirelocare@gmail.com"
                  className="text-red-600 font-medium hover:text-blue-600 transition-colors break-all"
                >
                  gatirelocare@gmail.com
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Working Hours
                </h3>
                <p className="text-gray-700 mb-2">Monday - Sunday</p>
                <p className="text-blue-600 font-medium">24/7 Available</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Free estimates with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Fully insured and licensed</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Expert team with 10+ years experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
