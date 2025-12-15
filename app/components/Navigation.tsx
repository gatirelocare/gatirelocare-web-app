"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
            >
              GatiRelocare Packers Movers
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-blue-700 hover:text-red-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-blue-700 hover:text-red-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/why-us"
                className="text-blue-700 hover:text-red-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                href="/contact"
                className="text-blue-700 hover:text-red-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-md text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
