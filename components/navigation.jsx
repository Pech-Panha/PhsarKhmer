"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";

export function Navigation({ currentPage, onNavigate, cartItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
  ];

  // Search handler → sends query to Products page
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate("products", { query: searchQuery.trim() });
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-green-100/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="w-12 mt-1.5 h-12 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="\phsarkh-logo.png"
                alt="PhsarKH Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              PhsarKhmer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm lg:text-base font-medium transition-all duration-300 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full ${
                  currentPage === item.id
                    ? "text-white bg-green-600 shadow-lg"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center space-x-2"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-2.5 w-64 xl:w-80 bg-white/70 backdrop-blur-sm border-green-200 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm text-sm xl:text-base"
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-11 w-11 rounded-full hover:bg-green-50 transition-all duration-300"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5 text-gray-700" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate("cart")}
              className="relative h-11 w-11 rounded-full hover:bg-green-50 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-lg">
                  {cartItems.length}
                </span>
              )}
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate("login")}
              className="h-11 w-11 rounded-full hover:bg-green-50 transition-all duration-300"
            >
              <User className="w-5 h-5 text-gray-700" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-11 w-11 rounded-full hover:bg-green-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearch} className="px-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-2.5 w-full bg-white/70 backdrop-blur-sm border-green-200 rounded-full focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
            </form>
          </div>
        )}

        {/* Mobile Drawer Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 backdrop-blur-md bg-white/90 rounded-b-2xl border-t border-green-100/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-3 px-5 mx-2 rounded-xl transition-all duration-300 font-medium ${
                    currentPage === item.id
                      ? "bg-green-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-green-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
