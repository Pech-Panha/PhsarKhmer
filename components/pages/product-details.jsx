"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react"

export function ProductDetailsPage({ product, onNavigate }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Default product if none selected
  const defaultProduct = {
    id: 1,
    name: "Fresh Vegetable Bundle",
    price: 12.99,
    originalPrice: 15.99,
    image: "/fresh-cambodian-vegetables-bundle.jpg",
    category: "vegetables",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description:
      "Fresh organic vegetables from local farms including bok choy, morning glory, and seasonal greens. Perfect for traditional Khmer cooking.",
    longDescription:
      "Our Fresh Vegetable Bundle contains the finest selection of organic vegetables sourced directly from local Cambodian farms. Each bundle includes seasonal greens like bok choy, morning glory, lettuce, and herbs that are essential for authentic Khmer cuisine. All vegetables are harvested fresh daily and delivered within 24 hours to ensure maximum freshness and nutritional value.",
    features: [
      "100% Organic and pesticide-free",
      "Harvested fresh daily",
      "Sourced from local farms",
      "Perfect for Khmer cooking",
      "Rich in vitamins and minerals",
    ],
    specifications: {
      Weight: "2-3 lbs",
      Origin: "Kandal Province, Cambodia",
      "Shelf Life": "5-7 days refrigerated",
      Certification: "Organic Cambodia Certified",
    },
  }

  const currentProduct = product || defaultProduct

  const images = [
    currentProduct.image,
    "/fresh-produce-abundance.png",
    "/cambodian-marketplace-with-fresh-products.jpg",
  ]

  const relatedProducts = [
    {
      id: 2,
      name: "Traditional Spice Mix",
      price: 8.99,
      image: "/traditional-khmer-spice-mix.jpg",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Handcrafted Bowl Set",
      price: 24.99,
      image: "/handcrafted-wooden-bowl-set.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Dried Mango Strips",
      price: 6.99,
      image: "/dried-mango-strips.jpg",
      rating: 4.6,
    },
  ]

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} x ${currentProduct.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button onClick={() => onNavigate("home")} className="hover:text-green-600">
            Home
          </button>
          <span>/</span>
          <button onClick={() => onNavigate("products")} className="hover:text-green-600">
            Products
          </button>
          <span>/</span>
          <span className="text-gray-900">{currentProduct.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" onClick={() => onNavigate("products")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt={currentProduct.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-green-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${currentProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                {currentProduct.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentProduct.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(currentProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  {currentProduct.rating} ({currentProduct.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-green-600">${currentProduct.price}</span>
                {currentProduct.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${currentProduct.originalPrice}</span>
                )}
                {currentProduct.originalPrice && (
                  <Badge className="bg-red-500">
                    Save ${(currentProduct.originalPrice - currentProduct.price).toFixed(2)}
                  </Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{currentProduct.longDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {currentProduct.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(1)} disabled={quantity >= 10}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={!currentProduct.inStock}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {currentProduct.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button variant="outline" size="lg" onClick={() => setIsFavorite(!isFavorite)}>
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Free Delivery</p>
                    <p className="text-sm text-gray-600">Orders over $25</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Quality Guarantee</p>
                    <p className="text-sm text-gray-600">30-day return</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-600">Hassle-free process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(currentProduct.specifications || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  // Handle related product click
                  onNavigate("product-details")
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">${relatedProduct.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
