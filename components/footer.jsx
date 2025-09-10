"use client"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export function Footer({ onNavigate }) {
  const productCategories = [
    "Vegetables & Fruits",
    "Meat & Seafood",
    "Spices & Herbs",
    "Traditional Snacks",
    "Kitchen & Tableware",
    "Personal Care",
  ]

  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "Products", page: "products" },
    { label: "About Us", page: "about" },
    { label: "Services", page: "service" },
  ]

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">PhsarKhmer</span>
            </div>
            <p className="text-green-100 mb-4">
              Your trusted source for authentic Khmer products. From fresh produce to traditional crafts, we bring the
              best of Cambodia to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-green-200 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-green-200 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-green-200 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate("products")}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate("login")}
                  className="text-green-100 hover:text-white transition-colors"
                >
                  My Account
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-200" />
                <span className="text-green-100">+855 12 345 678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-200" />
                <span className="text-green-100">info@phsarkhmer.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-200 mt-1" />
                <span className="text-green-100">
                  123 Riverside Blvd
                  <br />
                  Phnom Penh, Cambodia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">© 2024 PhsarKhmer. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
