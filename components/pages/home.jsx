"use client";
import { useState, useEffect, useRef } from "react";
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
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentAboutSlide, setCurrentAboutSlide] = useState(0);

  const heroSlides = [
    {
      title: "New And Fresh",
      subtitle: "Delivered Fresh",
      description:
        "Discover the finest selection of traditional Cambodian products, from fresh produce to handcrafted items, all sourced directly from local artisans and farmers.",
      image: "Slide1.png",
      badge: "100% Fresh & Organic",
    },
    {
      title: "Daily Products",
      subtitle: "& Aromatic Herbs",
      description:
        "Experience the authentic flavors of Cambodia with our premium collection of traditional spices and herbs, carefully selected from local farms.",
      image: "Slide2.png",
      badge: "Authentic Flavors",
    },
    {
      title: "Handcrafted",
      subtitle: "Made with Love",
      description:
        "Support local artisans with our beautiful collection of handcrafted kitchen and tableware, each piece telling a story of Cambodian heritage.",
      image: "Slide3.png",
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

  const aboutImages = [
    "https://opendevelopmentcambodia.net/wp-content/uploads/sites/2/2016/04/Corn-harvest_Agricutlural-Commondities.jpg",
    "https://blogs.adb.org/sites/blogs/files/ADB_2016_KHM_CS_536A1454_Fotor.jpg",
    "https://toursbyjeeps.com/wp-content/uploads/2021/12/Cambodian-handicrafts-768x538.jpg",
    "https://anoncambodia.com/wp-content/uploads/2024/05/About-Us-Photo-768x457.jpg",
    "https://www.meechiet.com.kh/wp-content/uploads/2020/01/Mee-Chiet-Donate-8-768x512.jpg",
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

  useEffect(() => {
    const aboutSlideInterval = setInterval(() => {
      setCurrentAboutSlide((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(aboutSlideInterval);
  }, [aboutImages.length]);

  const categories = [
    {
      id: "vegetables",
      name: "Vegetables & Fruits",
      image:
        "https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg",
      description: "Fresh, organic produce from local farms",
      icon: <Leaf className="w-8 h-8 text-white" />,
    },
    {
      id: "meat",
      name: "Meat & Seafood",
      image:
        "https://img.freepik.com/premium-photo/meat-seafood_1194485-1380.jpg",
      description: "Premium quality meat and fresh seafood",
      icon: <Heart className="w-8 h-8 text-white" />,
    },
    {
      id: "spices",
      name: "Spices & Herbs",
      image: "https://images5.alphacoders.com/337/337294.jpg",
      description: "Authentic Khmer spices and aromatic herbs",
      icon: <Award className="w-8 h-8 text-white" />,
    },
    {
      id: "snacks",
      name: "Traditional Snacks",
      image:
        "https://i.pinimg.com/736x/be/86/00/be86007bad3cb63804c8befdfa610a45.jpg",
      description: "Traditional sweets and dried fruits",
      icon: <Star className="w-8 h-8 text-white" />,
    },
    {
      id: "kitchenware",
      name: "Kitchen & Tableware",
      image:
        "https://i.pinimg.com/736x/d9/2a/1d/d92a1d317f3417cd607ef990a4e258d7.jpg",
      description: "Handcrafted bowls and kitchen essentials",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
    },
    {
      id: "personal-care",
      name: "Personal Care",
      image: "/natural-personal-care-products.jpg",
      description: "Natural shampoos and wellness products",
      icon: <Shield className="w-8 h-8 text-white" />,
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Lettuce",
      price: 2.99,
      priceKhmer: 12000,
      originalPrice: 3.99,
      originalPriceKhmer: 16000,
      image: "luuter.png",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Klen Shapoo",
      price: 5.25,
      priceKhmer: 32000,
      image: "/klen.png",
      rating: 4.9,
      reviews: 89,
      badge: "Organic",
    },
    {
      id: 3,
      name: "Handcrafted Cup floor",
      price: 1.99,
      priceKhmer: 8000,
      image: "/handi.png",
      rating: 4.7,
      reviews: 56,
    },
    {
      id: 4,
      name: "Dried Mango Strips",
      price: 2.99,
      priceKhmer: 12000,
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const nextAboutSlide = () => {
    setCurrentAboutSlide((prev) => (prev + 1) % aboutImages.length);
  };

  const prevAboutSlide = () => {
    setCurrentAboutSlide(
      (prev) => (prev - 1 + aboutImages.length) % aboutImages.length
    );
  };

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-gray-50 overflow-hidden">
        <div className="container mx-auto px-18 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium text-sm">
                <Leaf className="w-4 h-4 mr-2" />
                {heroSlides[currentSlide].badge}
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                <span className="text-green-600">
                  {heroSlides[currentSlide].title}
                </span>
                <span className="block text-3xl lg:text-4xl text-gray-700 font-medium mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("products")}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("about")}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg rounded-full"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex space-x-2 pt-4">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={heroSlides[currentSlide].image || "/placeholder.svg"}
                alt={heroSlides[currentSlide].title}
                className="relative rounded-3xl w-full h-auto"
              />
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-gray-70" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category (Controlled Carousel) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of authentic Khmer products, carefully
              curated from the best local sources.
            </p>
          </div>
          <div className="relative">
            <div className="flex overflow-hidden relative justify-center">
              {categories.map((category, index) => (
                <Card
                  key={category.id}
                  className={`flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 transition-transform duration-500 ease-in-out transform`}
                  style={{
                    transform: `translateX(-${currentCategoryIndex * 100}%)`,
                  }}
                  onClick={() => onNavigate("products")}
                >
                  <CardContent className="p-0 border-0 bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500 cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="p-2 bg-green-600 rounded-lg inline-block transition-transform duration-300 group-hover:scale-110">
                          {category.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Carousel Controls */}
            {categories.length > 1 && (
              <>
                <button
                  onClick={prevCategory}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg z-10 -ml-4"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextCategory}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg z-10 -mr-4"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      <hr className="mx-10 py-4 text-gray-100" />
      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked favorites from our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white rounded-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {product.badge && (
                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          {product.badge}
                        </div>
                      )}
                      {product.originalPrice && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Sale
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-medium text-gray-900 text-base">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
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
                        <span className="text-xs text-gray-500 ml-2">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-green-600">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="block text-xs text-gray-600 mt-1">
                          {product.priceKhmer?.toLocaleString() || 0}៛
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="p-2 w-10 h-10 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-gray-700 rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
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
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>
      <hr className="mx-10 py-4 text-gray-100" />
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PhsarKhmer?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our premium service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-100 rounded-full transition-all duration-300 transform group-hover:scale-110">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="mx-10 py-4 text-gray-100" />
      {/* About Section */}
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-10">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Our Objective
            </h2>
            <p className="hidden text-gray-500 md:mt-4 md:block">
              PhsarKhmer is more than just a marketplace. Our objective is to
              empower local Cambodian farmers and artisans by providing a direct
              platform to sell their organic produce and handcrafted goods. We
              believe in fair trade, sustainability, and preserving traditional
              craftsmanship.
            </p>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("about")}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full ">
          <img
            alt="About PhsarKhmer"
            src={aboutImages[currentAboutSlide]}
            className="h-full w-full object-cover transition-opacity duration-500 sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
          <button
            onClick={prevAboutSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextAboutSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {aboutImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAboutSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAboutSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Customer Feedback Carousel Section */}
      <section className="py-10 bg-green-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-green-100">
              Real feedback from our valued customers.
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <Card className="p-8 md:p-10 bg-white/10 border-0 shadow-lg backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <Quote className="w-12 h-12 text-white/50 mx-auto mb-4" />
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].comment}"
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <img
                    src={
                      testimonials[currentTestimonial].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-200"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-green-100 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <div className="flex items-center mt-1 sm:justify-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-300 fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
