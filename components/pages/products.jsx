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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/bok_choy.png",
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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/lettuce.png",
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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/cabbage.png",
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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/nappacabbage.png",
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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/choysum.png",
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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/kale.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 90,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 7,
      name: "Bas Leaf",
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/basleaf.png",
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
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 2.0,
      originalPriceKhmer: 8000,
      image: "/vegetable/greenmustard.png",
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
      price: 0.5,
      priceKhmer: 2000,
      originalPrice: 1.0,
      originalPriceKhmer: 4000,
      image: "/vegetable/lemongrass.png",
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
      price: 0.5,
      priceKhmer: 2000,
      originalPrice: 1.0,
      originalPriceKhmer: 4000,
      image: "/vegetable/basilleaf.png",
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
      originalPrice: 0.5,
      originalPriceKhmer: 2000,
      image: "/vegetable/springonion.png",
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
      originalPrice: 0.5,
      originalPriceKhmer: 2000,
      image: "/vegetable/culantro.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 13,
      name: "Chinese Cabbage",
      price: 1.0,
      priceKhmer: 4000,
      originalPrice: 1.5,
      originalPriceKhmer: 6000,
      image: "/vegetable/chinesecabbage.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 14,
      name: "Cucumnber",
      price: 0.5,
      priceKhmer: 2000,
      originalPrice: 0.75,
      originalPriceKhmer: 3000,
      image: "/vegetable/cucumber.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 15,
      name: "Carrot",
      price: 2.0,
      priceKhmer: 8000,
      originalPrice: 2.5,
      originalPriceKhmer: 10000,
      image: "/vegetable/carrot.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 16,
      name: "Climbing Wattle",
      price: 0.75,
      priceKhmer: 3000,
      originalPrice: 1.0,
      originalPriceKhmer: 4000,
      image: "/vegetable/climbingwattle.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic vegetables from local farms",
      badge: "Best Seller",
    },
    {
      id: 17,
      name: "White Corn",
      price: 0.95,
      priceKhmer: 3800,
      originalPrice: 1.0,
      originalPriceKhmer: 4000,
      image: "/vegetable/whitecorn.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 18,
      name: "Guava",
      price: 0.57,
      priceKhmer: 2300,
      originalPrice: 1.0,
      originalPriceKhmer: 4000,
      image: "/vegetable/guava.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 19,
      name: "white Dragon Fruit",
      price: 1.35,
      priceKhmer: 5400,
      originalPrice: 1.5,
      originalPriceKhmer: 6000,
      image: "/vegetable/wdragon.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 20,
      name: "Red Dragon Fruit",
      price: 1.6,
      priceKhmer: 6400,
      originalPrice: 1.8,
      originalPriceKhmer: 7200,
      image: "/vegetable/rdragon.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 21,
      name: "Papaya",
      price: 2.0,
      priceKhmer: 8000,
      originalPrice: 2.25,
      originalPriceKhmer: 11000,
      image: "/vegetable/papaya.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 22,
      name: "Sweet Pear",
      price: 2.9,
      priceKhmer: 11600,
      originalPrice: 3.0,
      originalPriceKhmer: 12000,
      image: "/vegetable/sweetpear.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 23,
      name: "Avocado Mondulkiri",
      price: 3.5,
      priceKhmer: 14000,
      originalPrice: 4.0,
      originalPriceKhmer: 16000,
      image: "/vegetable/avocado.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 24,
      name: "Pineapple",
      price: 1.25,
      priceKhmer: 5000,
      originalPrice: 1.5,
      originalPriceKhmer: 6000,
      image: "/vegetable/pineapple.png",
      category: "vegetables",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Fresh organic Fruit from local farms",
      badge: "Best Seller",
    },
    {
      id: 25,
      name: "Chicken Tigh (500g)",
      price: 1.8,
      priceKhmer: 7200,
      image: "/meat/chickenthigh.png",
      category: "meat",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 26,
      name: "Chicken Breast (500g)",
      price: 1.8,
      priceKhmer: 7200,
      image: "/meat/chickenbreast.png",
      category: "meat",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 27,
      name: "Chicken Wing (500g)",
      price: 1.9,
      priceKhmer: 7600,
      image: "/meat/chickenwing.png",
      category: "meat",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 28,
      name: "Chicken (1Whole)",
      price: 5.2,
      priceKhmer: 20800,
      image: "/meat/chicken.png",
      category: "meat",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 29,
      name: "Chicken Middle Wing (500g)",
      price: 3.6,
      priceKhmer: 14400,
      image: "/meat/chickenmid.png",
      category: "meat",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 30,
      name: "Chicken Egg (10pcs)",
      price: 1.8,
      priceKhmer: 7200,
      image: "/meat/egg.png",
      category: "meat",
      rating: 4.5,
      reviews: 25,
      inStock: true,
      description: "Premium quality Egg",
    },
    {
      id: 31,
      name: "Pork Fillet (500g)",
      price: 2.5,
      priceKhmer: 10000,
      image: "/meat/porkfillet.png",
      category: "meat",
      rating: 4.5,
      reviews: 25,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 32,
      name: "Pork Belly (500g)",
      price: 2.5,
      priceKhmer: 10000,
      image: "/meat/porkbelly.png",
      category: "meat",
      rating: 4.5,
      reviews: 25,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 33,
      name: "Minced Pork (500g)",
      price: 2.8,
      priceKhmer: 11200,
      image: "/meat/mincedpork.png",
      category: "meat",
      rating: 4.5,
      reviews: 25,
      inStock: true,
      description: "Premium quality fresh meat ",
    },
    {
      id: 34,
      name: "Pork Ribs (500g)",
      price: 3.0,
      priceKhmer: 7200,
      image: "/meat/porkrib.png",
      category: "meat",
      rating: 4.5,
      reviews: 25,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 35,
      name: "Local Beef Striploin(500g)",
      price: 4.45,
      priceKhmer: 17800,
      image: "/meat/beefstriploin.png",
      category: "meat",
      rating: 4.5,
      reviews: 80,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 36,
      name: "Beef Thigh (250g)",
      price: 2.15,
      priceKhmer: 8600,
      image: "/meat/beefthigh.png",
      category: "meat",
      rating: 4.5,
      reviews: 80,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 37,
      name: "Minced Beef (250g)",
      price: 2.25,
      priceKhmer: 9000,
      image: "/meat/mincedbeef.png",
      category: "meat",
      rating: 4.5,
      reviews: 69,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 38,
      name: "Shrimp (500g)",
      price: 4.5,
      priceKhmer: 18000,
      image: "/meat/shrimp.png",
      category: "meat",
      rating: 4.5,
      reviews: 69,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 39,
      name: "Octopus (500g)",
      price: 6.5,
      priceKhmer: 26000,
      image: "/meat/octopus.png",
      category: "meat",
      rating: 4.5,
      reviews: 69,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 40,
      name: "Crab (1kg)",
      price: 15.0,
      priceKhmer: 60000,
      image: "/meat/crab.png",
      category: "meat",
      rating: 4.5,
      reviews: 110,
      inStock: true,
      description: "Premium quality fresh meat",
    },
    {
      id: 41,
      name: "Fish Sauce (750ml)",
      price: 1.0,
      priceKhmer: 4000,
      image: "/spice/fishsauce.png",
      category: "spices",
      rating: 4.9,
      reviews: 80,
      inStock: true,
      description: "Authentic Khmer Sauce",
    },
    {
      id: 42,
      name: "Soy Sauce (450ml)",
      price: 1.0,
      priceKhmer: 4000,
      image: "/spice/soysauce.png",
      category: "spices",
      rating: 4.9,
      reviews: 80,
      inStock: true,
      description: "Authentic Khmer Sauce",
    },
    {
      id: 43,
      name: "Pure Ground Black Pepper (500g)",
      price: 8.5,
      priceKhmer: 34000,
      image: "/spice/groundpepper.png",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer Pepper",
      badge: "Organic",
    },
    {
      id: 44,
      name: "Kampot White Pepper (100g)",
      price: 5.0,
      priceKhmer: 20000,
      image: "/spice/kampotwpepper.png",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer Pepper",
      badge: "Organic",
    },
    {
      id: 45,
      name: "Star Anise Powder (50g)",
      price: 2.3,
      priceKhmer: 9200,
      image: "/spice/star.png",
      category: "spices",
      rating: 4.9,
      reviews: 57,
      inStock: true,
      description: "Authentic Khmer spice blend",
      badge: "Organic",
    },
    {
      id: 46,
      name: "Curry Powder (40g)",
      price: 3.5,
      priceKhmer: 14000,
      image: "/spice/currypowder.png",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer spice blend",
      badge: "Organic",
    },
    {
      id: 47,
      name: "Sea Salt in PET bottle(80g)",
      price: 2.5,
      priceKhmer: 10000,
      image: "/spice/seasalt.png",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer Salt",
      badge: "Organic",
    },
    {
      id: 48,
      name: "Black Peppercorn (200g)",
      price: 3.1,
      priceKhmer: 12400,
      image: "/spice/peppercorn.png",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer Pepper",
      badge: "Organic",
    },
    {
      id: 49,
      name: "Lemongrass Powder (240g)",
      price: 3.2,
      priceKhmer: 12800,
      image: "/spice/lemongrasspowder.png",
      category: "spices",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Authentic Khmer Lemongrass Powder",
      badge: "Organic",
    },
    {
      id: 50,
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
      id: 51,
      name: "Mango Roll (250g)",
      price: 3.9,
      priceKhmer: 15600,
      image: "/snack/mangoroll.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Sweet and chewy",
    },
    {
      id: 52,
      name: "Mango Roll Moringa(200g)",
      price: 3.9,
      priceKhmer: 28000,
      image: "/snack/mangoroll2.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Sweet and chewy",
    },
    {
      id: 53,
      name: "Cashew Nuts (300g)",
      price: 7.5,
      priceKhmer: 30000,
      image: "/snack/cashewnut.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "",
    },
    {
      id: 54,
      name: "Banana Candy",
      price: 1.4,
      priceKhmer: 5600,
      image: "/snack/bananacandy.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Sweet",
    },
    {
      id: 55,
      name: "Banana Candy",
      price: 3.2,
      priceKhmer: 12800,
      image: "/snack/bananacandy2.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Sweet",
    },
    {
      id: 56,
      name: "Square Cookie Lemongrass (200g)",
      price: 8.8,
      priceKhmer: 35200,
      image: "/snack/cookiegrass.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Delicious cookie with lemongrass flavor",
    },
    {
      id: 57,
      name: "Square Cookie Lemongrass (100g)",
      price: 5.5,
      priceKhmer: 22000,
      image: "/snack/cookiegrass2.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Delicious cookie with lemongrass flavor",
    },
    {
      id: 58,
      name: "Square Cookie Tamarind (100g)",
      price: 8.8,
      priceKhmer: 35200,
      image: "/snack/cookietamarind.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Delicious cookie with coconut flavor",
    },
    {
      id: 59,
      name: "Square Cookie Coconut (200g)",
      price: 5.5,
      priceKhmer: 22000,
      image: "/snack/cookiecoconut.png",
      category: "snacks",
      rating: 4.6,
      reviews: 78,
      inStock: true,
      description: "Delicious cookie with Tamarind flavor",
    },
    {
      id: 60,
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
      id: 61,
      name: "Coconut Facial Mask (x5)",
      price: 4.4,
      priceKhmer: 17600,
      image: "/care/mask.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Natural coconut face mask",
    },
    {
      id: 62,
      name: "Facial Scrub Jasmine Rice & Rose",
      price: 14.0,
      priceKhmer: 56000,
      image: "/care/scrub.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Gentle exfoliating scrub",
    },
    {
      id: 63,
      name: "Shower Gel (500ml)",
      price: 6.35,
      priceKhmer: 25400,
      image: "/care/showergel.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Refreshing shower gel",
    },
    {
      id: 64,
      name: "Body Lotion (120ml)",
      price: 4.9,
      priceKhmer: 19600,
      image: "/care/bodylotion.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Moisturizing body lotion",
    },
    {
      id: 65,
      name: "Body Lotion Moringa (200ml)",
      price: 20.9,
      priceKhmer: 80000,
      image: "/care/bodylotionmoringa.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Moisturizing body lotion",
    },
    {
      id: 66,
      name: "Herbal Soap (30g)",
      price: 1.75,
      priceKhmer: 7000,
      image: "/care/herbalsoap.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Natural herbal soap",
    },
    {
      id: 67,
      name: "Shampoo (400ml)",
      price: 6.25,
      priceKhmer: 25000,
      image: "/care/shampoo.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Nourishing shampoo",
    },
    {
      id: 68,
      name: "Conditioner (400ml)",
      price: 6.75,
      priceKhmer: 27000,
      image: "/care/conditioner.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Nourishing conditioner",
    },
    {
      id: 69,
      name: "Hair Care Set (Small)",
      price: 13.5,
      priceKhmer: 52000,
      image: "/care/haircareset.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Complete hair care set",
    },
    {
      id: 70,
      name: "KLEN - Anti Dandruff Shampoo (450ml)",
      price: 3.2,
      priceKhmer: 12800,
      image: "/care/klenblue.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Anti-dandruff shampoo",
    },
    {
      id: 71,
      name: "KLEN - Anti Hair Fall Shampoo (450ml)",
      price: 3.2,
      priceKhmer: 12800,
      image: "/care/klenyellow.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Anti-hairfall shampoo",
    },
    {
      id: 72,
      name: "KLEN - Anti Dandruff for Man (450ml)",
      price: 3.2,
      priceKhmer: 12800,
      image: "/care/klenman.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Anti-dandruff shampoo",
    },
    {
      id: 73,
      name: "Aloe Vera Soap (50g)",
      price: 3.3,
      priceKhmer: 13200,
      image: "/care/aloevera.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Soothing aloe vera soap",
    },
    {
      id: 74,
      name: "Tumeric Soap (50g)",
      price: 3.3,
      priceKhmer: 13200,
      image: "/care/tumeric.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Soothing tumeric soap",
    },
    {
      id: 75,
      name: "Pure Coconut Soap (50g)",
      price: 3.3,
      priceKhmer: 13200,
      image: "/care/coconut.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Soothing coconut soap",
    },
    {
      id: 76,
      name: "Aloe vera Night Cream (30g)",
      price: 3.95,
      priceKhmer: 15800,
      image: "/care/.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 80,
      inStock: true,
      description: "Balancing and nourishing night cream",
    },
    {
      id: 77,
      name: "Aloe vera Night Cream (30g)",
      price: 3.95,
      priceKhmer: 15800,
      image: "/care/aloecream.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 80,
      inStock: true,
      description: "Balancing and nourishing night cream",
    },
    {
      id: 78,
      name: "Ponlai Night Cream (30g)",
      price: 3.95,
      priceKhmer: 15800,
      image: "/care/ponlaicream.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 80,
      inStock: true,
      description: "Balancing and nourishing night cream",
    },
    {
      id: 79,
      name: "Mini Balm- Pack of 3 (15ml)",
      price: 5.7,
      priceKhmer: 22800,
      image: "/care/balm.png",
      category: "personal-care",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      description: "Soothing herbal balm",
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
