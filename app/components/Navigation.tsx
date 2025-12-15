import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
            >
              GatiRelocare Packers Movers
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-blue-700 hover:text-red-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-blue-700 hover:text-red-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/why-us"
              className="text-blue-700 hover:text-red-600 font-medium transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/contact"
              className="text-blue-700 hover:text-red-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-md"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
