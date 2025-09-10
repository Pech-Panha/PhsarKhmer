"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, User, Phone, MapPin, Truck } from "lucide-react"

export function CartPage({ onNavigate, cartItems = [], setCartItems }) {
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    location: "",
    deliveryType: "standard",
  })
  const [showPayment, setShowPayment] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const subtotalKhmer = cartItems.reduce((sum, item) => sum + (item.priceKhmer || item.price * 4000) * item.quantity, 0)
  const deliveryFee = orderForm.deliveryType === "express" ? 2.99 : 0.99
  const deliveryFeeKhmer = deliveryFee * 4000
  const total = subtotal + deliveryFee
  const totalKhmer = subtotalKhmer + deliveryFeeKhmer

  const handleInputChange = (field, value) => {
    setOrderForm((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = orderForm.name && orderForm.phone && orderForm.location

  const handleProceedToPayment = () => {
    if (isFormValid) {
      setShowPayment(true)
    }
  }

  const handlePaymentDone = () => {
    setPaymentComplete(true)
    setShowThankYou(true)
    // Clear cart after successful payment
    setTimeout(() => {
      setCartItems([])
      setShowPayment(false)
      setPaymentComplete(false)
      setShowThankYou(false)
      setOrderForm({ name: "", phone: "", location: "", deliveryType: "standard" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => onNavigate("products")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
              <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
            </div>
          </div>
          <ShoppingBag className="w-8 h-8 text-primary" />
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <img src="/empty-order.gif" alt="Empty Cart" className="w-48 h-48 object-contain" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some products to get started</p>
            <Button onClick={() => onNavigate("products")}>Start Shopping</Button>
          </div>
        ) : showPayment ? (
          /* Payment Section */
          <div className="max-w-2xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 text-center">Complete Your Payment</h3>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>
                        ${subtotal.toFixed(2)} ({subtotalKhmer.toLocaleString()}៛)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>
                        ${deliveryFee.toFixed(2)} ({deliveryFeeKhmer.toLocaleString()}៛)
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>
                        ${total.toFixed(2)} ({totalKhmer.toLocaleString()}៛)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3">Delivery Information</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Name:</strong> {orderForm.name}
                    </p>
                    <p>
                      <strong>Phone:</strong> {orderForm.phone}
                    </p>
                    <p>
                      <strong>Location:</strong> {orderForm.location}
                    </p>
                    <p>
                      <strong>Delivery:</strong>{" "}
                      {orderForm.deliveryType === "express" ? "Express (Same day)" : "Standard (2-3 days)"}
                    </p>
                  </div>
                </div>

                {/* QR Code Payment */}
                <div className="text-center">
                  <h4 className="font-semibold mb-4">Scan QR Code to Pay</h4>
                  <div className="flex justify-center mb-6">
                    <img
                      src="/payment-qr.png"
                      alt="Payment QR Code"
                      className="w-64 h-64 object-contain border rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Scan this QR code with your mobile banking app to complete the payment
                  </p>

                  <div className="space-y-3">
                    <Button className="w-full" onClick={handlePaymentDone} disabled={paymentComplete}>
                      {paymentComplete ? "Payment Completed!" : "Payment Done"}
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowPayment(false)}>
                      Back to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cart Items */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">Your Items ({cartItems.length})</h3>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 py-4 border-b border-border last:border-b-0"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">{item.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-lg font-semibold text-primary">${item.price}</span>
                            <span className="text-sm text-muted-foreground">
                              ({(item.priceKhmer || item.price * 4000).toLocaleString()}៛)
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-card-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {((item.priceKhmer || item.price * 4000) * item.quantity).toLocaleString()}៛
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive/80 mt-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Simplified Order Form */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">Order Information</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                        <User className="w-4 h-4 mr-2" />
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={orderForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={orderForm.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        Delivery Location
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your address"
                        value={orderForm.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-card-foreground mb-2">
                        <Truck className="w-4 h-4 mr-2" />
                        Delivery Type
                      </label>
                      <select
                        value={orderForm.deliveryType}
                        onChange={(e) => handleInputChange("deliveryType", e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="standard">Standard Delivery (2-3 days) - $0.99</option>
                        <option value="express">Express Delivery (Same day) - $2.99</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">Order Summary</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                      <div className="text-right">
                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                        <div className="text-sm text-muted-foreground">{subtotalKhmer.toLocaleString()}៛</div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <div className="text-right">
                        <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                        <div className="text-sm text-muted-foreground">{deliveryFeeKhmer.toLocaleString()}៛</div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total</span>
                        <div className="text-right">
                          <span className="text-lg font-semibold text-primary">${total.toFixed(2)}</span>
                          <div className="text-base font-semibold text-primary">{totalKhmer.toLocaleString()}៛</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mb-3" onClick={handleProceedToPayment} disabled={!isFormValid}>
                    Proceed to Payment
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" onClick={() => onNavigate("products")}>
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Thank You Popup */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
              <img src="/thankyou-delivery.gif" alt="Thank You" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">Your order has been placed successfully. We'll deliver it soon!</p>
              <div className="text-sm text-gray-500">
                <p>
                  Order Total: ${total.toFixed(2)} ({totalKhmer.toLocaleString()}៛)
                </p>
                <p>Delivery to: {orderForm.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
