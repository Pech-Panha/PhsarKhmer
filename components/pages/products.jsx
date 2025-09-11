"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Grid, List, Star, ShoppingCart, Heart } from "lucide-react";

export function ProductsPage({ onNavigate, cartItems, setCartItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "vegetables", name: "Vegetables & Fruits" },
    { id: "meat", name: "Meat & Seafood" },
    { id: "spices", name: "Spices & Herbs" },
    { id: "snacks", name: "Traditional Snacks" },
    { id: "kitchenware", name: "Kitchen & Tableware" },
    { id: "personal-care", name: "Personal Care" },
  ];

  const products = [
    {
      id: 1,
      name: "Bok Choy",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/bok_choy.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Lettuce",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/lettuce.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "Cabbage",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/cabbage.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 4,
      name: "Nappa Cabbage",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/nappacabbage.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 5,
      name: "Choy Sum",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/choysum.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 6,
      name: "Kale",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/kale.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 7,
      name: "Bas Leaf",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/basleaf.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 8,
      name: "Green Mustard",
      price: 1.00,
      priceKhmer: 4000,
      originalPrice: 2.00,
      originalPriceKhmer: 8000,
      image: "/greenmustard.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 9,
      name: "Lemongrass",
      price: 0.50,
      priceKhmer: 2000,
      originalPrice: 1.00,
      originalPriceKhmer:4000,
      image: "/lemongrass.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 10,
      name: "Basil leaf",
      price: 0.50,
      priceKhmer: 2000,
      originalPrice: 1.00,
      originalPriceKhmer:4000,
      image: "/basilleaf.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 11,
      name: "Spring Onion",
      price: 0.25,
      priceKhmer: 1000,
      originalPrice: 0.50,
      originalPriceKhmer:2000,
      image: "/springonion.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 12,
      name: "Culatro",
      price: 0.25,
      priceKhmer: 1000,
      originalPrice: 0.50,
      originalPriceKhmer:2000,
      image: "/culantro.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Traditional Spice Mix",
      price: 8.99,
      priceKhmer: 36000,
      image: "/traditional-khmer-spice-mix.jpg",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer spice blend",
      badge: "Organic",
    },
    {
      id: 3,
      name: "Handcrafted Bowl Set",
      price: 24.99,
      priceKhmer: 100000,
      image: "/handcrafted-wooden-bowl-set.jpg",
      category: "kitchenware",
      rating: 4.7,
      reviews: 56,
      inStock: true,
      description: "Beautiful handcrafted wooden bowls",
    },
    {
      id: 4,
      name: "Dried Mango Strips",
      price: 6.99,
      priceKhmer: 28000,
      image: "/dried-mango-strips.jpg",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Sweet and chewy dried mango",
    },
    {
      id: 5,
      name: "Fresh Meat Selection",
      price: 18.99,
      priceKhmer: 76000,
      image: "/fresh-meat-products.jpg",
      category: "meat",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 6,
      name: "Natural Shampoo",
      price: 9.99,
      priceKhmer: 40000,
      image: "/natural-personal-care-products.jpg",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: false,
      description: "Organic herbal shampoo",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover authentic Khmer products sourced directly from local
            artisans and farmers
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-xl shadow-sm p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} of {products.length} products
          </p>
          {(cartItems?.length || 0) > 0 && (
            <Button
              onClick={() => onNavigate("cart")}
              className="bg-primary hover:bg-primary/90"
            >
              View Cart (
              {(cartItems || []).reduce((sum, item) => sum + item.quantity, 0)})
            </Button>
          )}
        </div>

        {/* Products Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Badge variant="secondary">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
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
                      disabled={!product.inStock}
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
        ) : (
          <div className="space-y-4">
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                          <Badge variant="secondary" className="text-xs">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-1">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {product.description}
                          </p>
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground ml-2">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-xl font-bold text-primary">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <Button
                            disabled={!product.inStock}
                            onClick={() => addToCart(product)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No products found matching your criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
