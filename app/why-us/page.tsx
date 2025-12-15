import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose GatiRelocare Packers Movers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference of premium service with our dedicated
              team
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">10+</div>
              <div className="text-blue-100 text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
              <div className="text-red-100 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
              <div className="text-blue-100 text-lg">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">24/7</div>
              <div className="text-red-100 text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Experienced Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our trained team brings years of expertise and dedication to
                every move, ensuring your items are in safe hands with
                meticulous attention to detail. Each member of our team
                undergoes rigorous training to handle everything from delicate
                antiques to heavy furniture.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Certified and trained professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Years of hands-on experience
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Expert handling of all item types
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-white to-red-100 rounded-3xl p-12 border-2 border-blue-200">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Years Serving Customers
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-blue-200 to-red-200"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">
                    1000+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Successful Moves
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-red-100 via-white to-blue-100 rounded-3xl p-12 order-2 md:order-1 border-2 border-red-200">
              <div className="space-y-6">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-red-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-red-900 mb-2">
                    100% Satisfaction
                  </h3>
                  <p className="text-gray-700">Guaranteed quality service</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-red-900 mb-8">
                Customer-Centric Approach
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We prioritize your needs and work closely with you to customize
                our services, providing personalized solutions that fit your
                specific requirements. Your satisfaction is our top priority,
                and we go above and beyond to exceed expectations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Personalized service plans
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Dedicated customer support
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Honest and upfront quotes with no hidden fees. You'll know
                exactly what to expect, with complete transparency throughout
                the process. We provide detailed estimates and ensure there are
                no surprise charges.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Free estimates with no obligation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    No hidden fees or charges
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Clear and detailed breakdowns
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-12">
              <div className="space-y-6">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-900 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Fair & Transparent
                  </h3>
                  <p className="text-gray-600">
                    No surprises, just honest pricing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-12 order-2 md:order-1">
              <div className="space-y-6">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-900 mx-auto mb-4"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-600">We value your time</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-red-900 mb-8">
                Timely Delivery
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We value your time and strive to deliver your belongings
                promptly and efficiently, making your moving experience as
                smooth as possible. Our logistics team ensures optimal routing
                and scheduling for maximum efficiency.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Punctual arrival and delivery
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Efficient logistics planning
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Real-time tracking updates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their
                moves
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
