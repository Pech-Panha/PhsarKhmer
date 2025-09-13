import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Minus,
  Plus,
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

// A simple component to mimic the Button from a UI library
const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "default",
  size = "md",
}) => {
  const baseClasses = "font-medium transition-colors duration-200 rounded-full";
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  const variantClasses = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
  };
  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${
    variantClasses[variant]
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  return (
    <button onClick={onClick} disabled={disabled} className={finalClasses}>
      {children}
    </button>
  );
};

// A simple component to mimic the Card from a UI library
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg ${className}`}>{children}</div>
);

// A simple component to mimic the Badge from a UI library
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ${className}`}
  >
    {children}
  </span>
);

// Main App component that holds all the logic and UI
export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  // Default product data
  const defaultProduct = {
    id: 1,
    name: "Fresh Vegetable Bundle",
    price: 12.99,
    originalPrice: 15.99,
    image: "https://placehold.co/800x600/bbf7d0/16a34a?text=Vegetable+Bundle",
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
  };

  const currentProduct = defaultProduct;

  const images = [
    currentProduct.image,
    "https://placehold.co/800x600/d1e7dd/1a5332?text=Fresh+Produce",
    "https://placehold.co/800x600/c7d2fe/3730a3?text=Marketplace",
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Traditional Spice Mix",
      price: 8.99,
      image: "https://placehold.co/300x200/fecaca/991b1b?text=Spice+Mix",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Handcrafted Bowl Set",
      price: 24.99,
      image: "https://placehold.co/300x200/fef08a/a16207?text=Bowl+Set",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Dried Mango Strips",
      price: 6.99,
      image: "https://placehold.co/300x200/ffedd5/9a3412?text=Mango+Strips",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Dried Mango Strips",
      price: 6.99,
      image: "https://placehold.co/300x200/ffedd5/9a3412?text=Mango+Strips",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Dried Mango Strips",
      price: 6.99,
      image: "https://placehold.co/300x200/ffedd5/9a3412?text=Mango+Strips",
      rating: 4.6,
    },
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} x ${currentProduct.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* Breadcrumb & Back Button */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Button variant="ghost" className="p-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">
            {currentProduct.name}
          </span>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 bg-white p-6 md:p-12 rounded-2xl shadow-xl">
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="mb-6 w-full max-w-lg overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src={images[selectedImage]}
                alt={currentProduct.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Thumbnail Navigation */}
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide px-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-green-500 ring-2 ring-green-500"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${currentProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="flex flex-col justify-center">
            <Badge className="bg-green-200 text-green-800 mb-2">
              {currentProduct.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              {currentProduct.name}
            </h1>

            {/* Rating and Reviews */}
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(currentProduct.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {currentProduct.rating} ({currentProduct.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl md:text-5xl font-bold text-green-600">
                ${currentProduct.price}
              </span>
              {currentProduct.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${currentProduct.originalPrice}
                </span>
              )}
              {currentProduct.originalPrice && (
                <Badge className="bg-red-500 text-white text-sm font-semibold rounded-full px-3 py-1">
                  Save $
                  {(
                    currentProduct.originalPrice - currentProduct.price
                  ).toFixed(2)}
                </Badge>
              )}
            </div>

            {/* Short Description */}
            <p className="text-gray-700 leading-relaxed mb-6 border-b border-gray-200 pb-6">
              {currentProduct.description}
            </p>

            {/* Quantity and Actions */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                <Button
                  variant="ghost"
                  size="md"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-5 h-5" />
                </Button>
                <span className="px-6 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="md"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>

              <Button
                size="lg"
                className="flex-1 w-full md:w-auto"
                onClick={handleAddToCart}
                disabled={!currentProduct.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {currentProduct.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex-shrink-0"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? "fill-current text-red-500" : ""
                  }`}
                />
              </Button>
              <Button variant="outline" size="lg" className="flex-shrink-0">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Truck className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-sm text-gray-600">Orders over $25</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold">Quality Guarantee</p>
                  <p className="text-sm text-gray-600">30-day return</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <RotateCcw className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-sm text-gray-600">Hassle-free process</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16 bg-white p-6 md:p-12 rounded-2xl shadow-xl">
          <div className="flex border-b border-gray-200 mb-6 space-x-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-3 border-b-2 text-lg font-medium transition-all duration-300 ${
                activeTab === "description"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-600"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`pb-3 border-b-2 text-lg font-medium transition-all duration-300 ${
                activeTab === "features"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-600"
              }`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 border-b-2 text-lg font-medium transition-all duration-300 ${
                activeTab === "specs"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-600"
              }`}
            >
              Specifications
            </button>
          </div>
          <div className="p-4">
            {activeTab === "description" && (
              <p className="text-gray-700 leading-relaxed">
                {currentProduct.longDescription}
              </p>
            )}
            {activeTab === "features" && (
              <ul className="space-y-3">
                {currentProduct.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(currentProduct.specifications || {}).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Related Products
          </h3>
          <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="flex-shrink-0 w-64 md:w-80 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {relatedProduct.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      ${relatedProduct.price}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {relatedProduct.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
