"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomePage } from "@/components/pages/home"
import { ProductsPage } from "@/components/pages/products"
import { AboutPage } from "@/components/pages/about"
import { ServicePage } from "@/components/pages/service"
import { LoginPage } from "@/components/pages/login"
import { SignUpPage } from "@/components/pages/signup"
import { CartPage } from "@/components/pages/cart"
import { NotFoundPage } from "@/components/pages/not-found"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [cartItems, setCartItems] = useState([])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} cartItems={cartItems} setCartItems={setCartItems} />
      case "products":
        return <ProductsPage onNavigate={setCurrentPage} cartItems={cartItems} setCartItems={setCartItems} />
      case "about":
        return <AboutPage />
      case "service":
        return <ServicePage />
      case "login":
        return <LoginPage onNavigate={setCurrentPage} />
      case "signup":
        return <SignUpPage onNavigate={setCurrentPage} />
      case "cart":
        return <CartPage onNavigate={setCurrentPage} cartItems={cartItems} setCartItems={setCartItems} />
      default:
        return <NotFoundPage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} cartItems={cartItems} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}
