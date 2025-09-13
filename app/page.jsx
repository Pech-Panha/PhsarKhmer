"use client";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HomePage } from "@/components/pages/home";
import { ProductsPage } from "@/components/pages/products";
import { AboutPage } from "@/components/pages/about";
import { ServicePage } from "@/components/pages/service";
import { LoginPage } from "@/components/pages/login";
import { SignUpPage } from "@/components/pages/signup";
import { CartPage } from "@/components/pages/cart";
import { NotFoundPage } from "@/components/pages/not-found";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // custom navigate handler → supports passing search query
  const handleNavigate = (page, options = {}) => {
    setCurrentPage(page);
    if (options.query) {
      setSearchQuery(options.query);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={handleNavigate}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      case "products":
        return (
          <ProductsPage
            onNavigate={handleNavigate}
            cartItems={cartItems}
            setCartItems={setCartItems}
            searchQuery={searchQuery} // 👈 pass query
          />
        );
      case "about":
        return <AboutPage />;
      case "service":
        return <ServicePage />;
      case "login":
        return <LoginPage onNavigate={handleNavigate} />;
      case "signup":
        return <SignUpPage onNavigate={handleNavigate} />;
      case "cart":
        return (
          <CartPage
            onNavigate={handleNavigate}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        );
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartItems={cartItems}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
