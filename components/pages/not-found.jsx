"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ShoppingBag, ArrowLeft } from "lucide-react"

export function NotFoundPage({ onNavigate }) {
  const popularProducts = [
    {
      id: 1,
      name: "Fresh Vegetable Bundle",
      price: "$12.99",
      image: "/fresh-cambodian-vegetables-bundle.jpg",
    },
    {
      id: 2,
      name: "Traditional Spice Mix",
      price: "$8.99",
      image: "/traditional-khmer-spice-mix.jpg",
    },
    {
      id: 3,
      name: "Handcrafted Bowl Set",
      price: "$24.99",
      image: "/handcrafted-wooden-bowl-set.jpg",
    },
  ]

  const quickLinks = [
    { label: "Home", page: "home", icon: <Home className="w-4 h-4" /> },
    { label: "Products", page: "products", icon: <ShoppingBag className="w-4 h-4" /> },
    { label: "About Us", page: "about", icon: <Search className="w-4 h-4" /> },
    { label: "Services", page: "service", icon: <Search className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <Card className="shadow-xl border-0">
          <CardContent className="p-12 text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-green-200 mb-4">404</div>
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h1>
              <p className="text-lg text-gray-600 mb-2">
                The page you're looking for seems to have wandered off like a lost mango in the market.
              </p>
              <p className="text-gray-500">Don't worry, let's get you back to shopping for authentic Khmer products!</p>
            </div>

            {/* Quick Actions */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" onClick={() => onNavigate("home")} className="bg-green-600 hover:bg-green-700">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNavigate("products")}>
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Browse Products
                </Button>
                <Button variant="ghost" size="lg" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => onNavigate(link.page)}
                    className="flex items-center justify-center space-x-2 py-3"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Popular Products */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                While you're here, check out these popular products
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      // Navigate to product details or products page
                      onNavigate("products")
                    }}
                  >
                    <CardContent className="p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-green-600 font-semibold">{product.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
              <p className="text-gray-600 mb-4">
                If you think this is an error or need assistance, our customer support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate("service")}>
                  Visit Help Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
