"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Sumtread</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive("/") ? "text-blue-600 font-semibold" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive("/about") ? "text-blue-600 font-semibold" : ""}`}
              >
                About
              </Link>

              {/* Product Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors ${location.pathname.includes("/product") ? "text-blue-600 font-semibold" : ""}`}
                >
                  Product
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isProductDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                    <Link
                      to="/product/dewasa"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Sepatu Dewasa
                    </Link>
                    <Link
                      to="/product/anak-anak"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Sepatu Anak-anak
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive("/contact") ? "text-blue-600 font-semibold" : ""}`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="space-y-2">
                  <span className="text-gray-700 font-medium">Product</span>
                  <Link
                    to="/product/dewasa"
                    className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sepatu Dewasa
                  </Link>
                  <Link
                    to="/product/anak-anak"
                    className="block pl-4 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sepatu Anak-anak
                  </Link>
                </div>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Sumtread</span>
              </div>
              <p className="text-gray-400">
                Menyediakan sepatu berkualitas tinggi untuk seluruh keluarga dengan desain modern dan kenyamanan
                maksimal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="text-gray-400 hover:text-white transition-colors">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/product/dewasa" className="text-gray-400 hover:text-white transition-colors">
                    Sepatu Dewasa
                  </Link>
                </li>
                <li>
                  <Link to="/product/anak-anak" className="text-gray-400 hover:text-white transition-colors">
                    Sepatu Anak-anak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@sumtread.com</p>
                <p>Phone: +62 123 456 789</p>
                <p>Address: Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sumtread. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
