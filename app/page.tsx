import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 via-blue-100/30 to-red-50 relative overflow-hidden">
        {/* Light backdrop overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-white/40 to-red-100/20"></div>
        {/* Background decorative images */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
            alt="Moving truck"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-10 left-10 w-48 h-48 opacity-10">
        <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop"
            alt="Moving boxes"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Premium Relocation
                </span>
                <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Services
                </span>
          </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto lg:mx-0">
                Experience luxury moving services with expert handling,
                white-glove service, and uncompromising care for your belongings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all text-lg shadow-lg"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all text-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-blue-200">
                <h2 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    Get Your Free Quote
                  </span>
                </h2>
                <ContactForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Free Estimate
              </h3>
              <p className="text-gray-700">
                Transparent pricing with no hidden fees
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                24/7 Service
              </h3>
              <p className="text-gray-700">
                Round-the-clock support for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Quick Delivery
              </h3>
              <p className="text-gray-700">Fast and efficient transportation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                Secure & Insured
              </h3>
              <p className="text-gray-700">
                Fully insured with premium protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Our Premium Services
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive relocation solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
                  alt="Domestic Moving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Domestic Moving
                </h3>
                <p className="text-gray-700">
                  Securely packed and safely transported, your home is our
                  priority!
                </p>
              </div>
            </div>
            <div className="bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-red-100 hover:border-red-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                  alt="Corporate Shifting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-3">
                  Corporate Shifting
                </h3>
                <p className="text-gray-700">
                  Seamless transitions for your business, with care for every
                  detail!
                </p>
              </div>
            </div>
            <div className="bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Transportation Solution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Transportation Solution
                </h3>
                <p className="text-gray-700">
                  Timely and safe delivery, tailored to your needs!
                </p>
              </div>
            </div>
            <div className="bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-red-100 hover:border-red-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Storage & Warehouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-3">
                  Storage & Warehouse
                </h3>
                <p className="text-gray-700">
                  Secure, flexible solutions for all your storage needs!
                </p>
              </div>
            </div>
            <div className="bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
                  alt="Automobile Shifting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Automobile Shifting
                </h3>
                <p className="text-gray-700">
                  Safe transport for your cars and bikes, arriving in pristine
                  condition!
                </p>
              </div>
            </div>
            <div className="bg-white p-0 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-red-100 hover:border-red-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                  alt="Packaging Solution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-900 mb-3">
                  Packaging Solution
                </h3>
                <p className="text-gray-700">
                  Stress-free packing with high-quality protection for your
                  belongings!
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Preview Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Why Choose GatiRelocare Packers Movers
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We pride ourselves on our experienced team of trained
                professionals who bring expertise and dedication to every move,
                ensuring your items are in safe hands.
              </p>
              <ul className="space-y-4 mb-8">
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
                  <span className="text-gray-700 text-lg">
                    Experienced team of trained professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">
                    Customer-centric approach with personalized solutions
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
                  <span className="text-gray-700 text-lg">
                    Transparent pricing with no hidden fees
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">
                    Timely delivery and efficient service
                  </span>
                </li>
              </ul>
              <Link
                href="/why-us"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all text-lg shadow-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
                  alt="Professional moving team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">10+</div>
                      <div className="text-sm text-blue-100">Years of Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">1000+</div>
                      <div className="text-sm text-blue-100">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">100%</div>
                      <div className="text-sm text-blue-100">Customer Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">24/7</div>
                      <div className="text-sm text-blue-100">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Trusted by premium customers across the country
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "I recently hired GatiRelocare Packers Movers for my relocation,
                and I couldn't be happier! The team was professional, efficient,
                and took great care of my belongings. Everything arrived on time
                and in perfect condition. Highly recommend!"
              </p>
              <div>
                <div className="font-semibold text-blue-900">
                  Ravi Prakash Singh
                </div>
                <div className="text-sm text-gray-500">Business Executive</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Moving can be stressful, but GatiRelocare Packers Movers made
                it a breeze! Their customer service was outstanding, and the
                packing and loading process was seamless. I felt confident
                knowing my items were in safe hands."
              </p>
              <div>
                <div className="font-semibold text-blue-900">Neha Gupta</div>
                <div className="text-sm text-gray-500">Homeowner</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "I was impressed by the level of care and attention to detail.
                They handled my antique furniture with such professionalism.
                Everything was delivered safely and on schedule. I will
                definitely use their services again!"
              </p>
              <div>
                <div className="font-semibold text-blue-900">
                  Rahul Devendra Mehta
                </div>
                <div className="text-sm text-gray-500">Collector</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "GatiRelocare Packers Movers exceeded my expectations! From the
                initial booking to the final delivery, the entire process was
                smooth and hassle-free. The team was friendly and worked
                efficiently."
              </p>
              <div>
                <div className="font-semibold text-blue-900">Pooja Desai</div>
                <div className="text-sm text-gray-500">Corporate Client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
