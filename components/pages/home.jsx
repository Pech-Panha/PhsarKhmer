"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Truck,
  Shield,
  Leaf,
  Star,
  ArrowRight,
  Heart,
  Award,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

export function HomePage({
  onNavigate,
  onProductSelect,
  cartItems,
  setCartItems,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      title: "Authentic Khmer Products",
      subtitle: "Delivered Fresh",
      description:
        "Discover the finest selection of traditional Cambodian products, from fresh produce to handcrafted items, all sourced directly from local artisans and farmers.",
      image: "/cambodian-marketplace-with-fresh-products.jpg",
      badge: "100% Fresh & Organic",
    },
    {
      title: "Traditional Spices",
      subtitle: "& Aromatic Herbs",
      description:
        "Experience the authentic flavors of Cambodia with our premium collection of traditional spices and herbs, carefully selected from local farms.",
      image: "/traditional-khmer-spice-mix.jpg",
      badge: "Authentic Flavors",
    },
    {
      title: "Handcrafted Items",
      subtitle: "Made with Love",
      description:
        "Support local artisans with our beautiful collection of handcrafted kitchen and tableware, each piece telling a story of Cambodian heritage.",
      image: "/handcrafted-wooden-bowl-set.jpg",
      badge: "Artisan Made",
    },
  ];

  const testimonials = [
    {
      name: "Sophea Chen",
      location: "Phnom Penh",
      rating: 5,
      comment:
        "The freshest vegetables I've ever ordered online! PhsarKhmer brings authentic Cambodian flavors right to my doorstep. Highly recommended!",
      avatar: "/cambodian-woman-smiling.jpg",
    },
    {
      name: "David Kim",
      location: "Siem Reap",
      rating: 5,
      comment:
        "Amazing quality spices and super fast delivery. The traditional snacks remind me of my childhood. Will definitely order again!",
      avatar: "/asian-man-happy.jpg",
    },
    {
      name: "Mealea Pich",
      location: "Battambang",
      rating: 5,
      comment:
        "Love the handcrafted bowls! Beautiful quality and the customer service is excellent. PhsarKhmer is now my go-to for authentic Khmer products.",
      avatar: "/cambodian-woman-traditional.jpg",
    },
    {
      name: "James Wilson",
      location: "Phnom Penh",
      rating: 5,
      comment:
        "As a foreigner living in Cambodia, PhsarKhmer helps me discover authentic local products. The quality is outstanding and delivery is always on time.",
      avatar: "/western-man-smiling.jpg",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  const categories = [
    {
      id: "vegetables",
      name: "Vegetables & Fruits",
      image:
        "https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg",
      description: "Fresh, organic produce from local farms",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      id: "meat",
      name: "Meat & Seafood",
      image:
        "https://img.freepik.com/premium-photo/meat-seafood_1194485-1380.jpg",
      description: "Premium quality meat and fresh seafood",
      icon: <Award className="w-8 h-8 text-green-600" />,
    },
    {
      id: "spices",
      name: "Spices & Herbs",
      image: "https://images5.alphacoders.com/337/337294.jpg",
      description: "Authentic Khmer spices and aromatic herbs",
    },
    {
      id: "snacks",
      name: "Traditional Snacks",
      image:
        "/traditional-cambodian-snacks.jpghttps://d1bv4heaa2n05k.cloudfront.net/user-images/1484127557888/shutterstock-390568831_main_1484127563751.jpeg",
      description: "Traditional sweets and dried fruits",
    },
    {
      id: "kitchenware",
      name: "Kitchen & Tableware",
      image: "/handcrafted-wooden-bowl-set.jpg",
      description: "Handcrafted bowls and kitchen essentials",
    },
    {
      id: "personal-care",
      name: "Personal Care",
      image: "/natural-personal-care-products.jpg",
      description: "Natural shampoos and wellness products",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Vegetable Bundle",
      price: 12.99,
      priceKhmer: 52000,
      originalPrice: 15.99,
      originalPriceKhmer: 64000,
      image: "/fresh-cambodian-vegetables-bundle.jpg",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Traditional Spice Mix",
      price: 8.99,
      priceKhmer: 36000,
      image: "/traditional-khmer-spice-mix.jpg",
      rating: 4.9,
      reviews: 89,
      badge: "Organic",
    },
    {
      id: 3,
      name: "Handcrafted Bowl Set",
      price: 24.99,
      priceKhmer: 100000,
      image: "/handcrafted-wooden-bowl-set.jpg",
      rating: 4.7,
      reviews: 56,
    },
    {
      id: 4,
      name: "Dried Mango Strips",
      price: 6.99,
      priceKhmer: 28000,
      image: "/dried-mango-strips.jpg",
      rating: 4.6,
      reviews: 78,
    },
  ];

  const benefits = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "100% Organic",
      description:
        "All our products are certified organic and naturally grown with no harmful chemicals",
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: "Fast Delivery",
      description:
        "Same-day delivery within Phnom Penh, nationwide shipping available with tracking",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Quality Guaranteed",
      description:
        "30-day money-back guarantee on all products with quality assurance",
    },
  ];

  const addToCart = (product) => {
    const safeCartItems = cartItems || [];
    const existingItem = safeCartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        safeCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...safeCartItems, { ...product, quantity: 1 }]);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/fresh-produce-abundance.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium text-sm">
                <Leaf className="w-4 h-4 mr-2" />
                {heroSlides[currentSlide].badge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {heroSlides[currentSlide].title.split(" ")[0]}
                <span className="block text-green-600">
                  {heroSlides[currentSlide].title.split(" ").slice(1).join(" ")}
                </span>
                <span className="block text-4xl lg:text-5xl text-gray-700">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("products")}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("about")}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-green-600" : "bg-green-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src={heroSlides[currentSlide].image || "/placeholder.svg"}
                alt={heroSlides[currentSlide].title}
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our wide range of authentic Khmer products, carefully
              curated from the best local sources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-green-50 overflow-hidden"
                onClick={() => onNavigate("products")}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 text-white">
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked favorites from our customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.originalPrice && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          Sale
                        </div>
                      )}
                      {product.badge && (
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                    >
                      <Heart className="w-5 h-5 text-gray-600" />
                    </Button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl font-bold text-green-600">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <span className="text-gray-600">
                            {product.priceKhmer?.toLocaleString() || 0}៛
                          </span>
                          {product.originalPriceKhmer && (
                            <span className="text-gray-400 line-through">
                              {product.originalPriceKhmer?.toLocaleString()}៛
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3 font-medium transition-all duration-300"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("products")}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose PhsarKhmer?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-green-100 rounded-2xl">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-green-100">
              Real feedback from our valued customers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-12 h-12 text-green-600" />
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].comment}"
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={
                      testimonials[currentTestimonial].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
