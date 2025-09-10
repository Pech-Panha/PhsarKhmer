"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, QrCode, Truck } from "lucide-react"

export function PaymentPage({ onNavigate, cartItems = [] }) {
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    phone: "",
    location: "",
    deliveryType: "standard",
  })
  const [showQR, setShowQR] = useState(false)
  const [paymentScanned, setPaymentScanned] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const deliveryOptions = [
    { id: "standard", label: "Standard Delivery (2-3 days)", price: 0, priceKhmer: 0 },
    { id: "express", label: "Express Delivery (Same day)", price: 5, priceKhmer: 20000 },
    { id: "pickup", label: "Store Pickup (Free)", price: 0, priceKhmer: 0 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const subtotalKhmer = cartItems.reduce((sum, item) => sum + item.priceKhmer * item.quantity, 0)
  const deliveryFee = deliveryOptions.find((opt) => opt.id === orderInfo.deliveryType)?.price || 0
  const deliveryFeeKhmer = deliveryOptions.find((opt) => opt.id === orderInfo.deliveryType)?.priceKhmer || 0
  const total = subtotal + deliveryFee
  const totalKhmer = subtotalKhmer + deliveryFeeKhmer

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    setShowQR(true)
  }

  const handlePaymentDone = () => {
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
      onNavigate("home")
    }, 3000)
  }

  // Simulate QR scan detection
  const simulateQRScan = () => {
    setTimeout(() => {
      setPaymentScanned(true)
    }, 2000)
  }

  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <Card className="w-full max-w-md mx-4 bg-white shadow-2xl">
          <CardContent className="p-8 text-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thankyou%20illustration-brgqWFS7JCbQrDDuii9Ire9Eho7fFs.gif"
              alt="Thank you delivery illustration"
              className="w-32 h-32 mx-auto mb-6"
            />
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your order has been confirmed and will be delivered soon. We appreciate your business!
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => onNavigate("cart")} className="hover:bg-green-50 rounded-full">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Cart
            </Button>
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            {!showQR ? (
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl">
                    <Truck className="w-6 h-6 mr-3 text-green-600" />
                    Order Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleOrderSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <Input
                        required
                        value={orderInfo.name}
                        onChange={(e) => setOrderInfo({ ...orderInfo, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="py-3 px-4 rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        required
                        value={orderInfo.phone}
                        onChange={(e) => setOrderInfo({ ...orderInfo, phone: e.target.value })}
                        placeholder="+855 12 345 678"
                        className="py-3 px-4 rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Location</label>
                      <Input
                        required
                        value={orderInfo.location}
                        onChange={(e) => setOrderInfo({ ...orderInfo, location: e.target.value })}
                        placeholder="Enter your full address"
                        className="py-3 px-4 rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Delivery Type</label>
                      <div className="space-y-3">
                        {deliveryOptions.map((option) => (
                          <label
                            key={option.id}
                            className="flex items-center p-4 border-2 rounded-xl cursor-pointer hover:bg-green-50 transition-all duration-300"
                          >
                            <input
                              type="radio"
                              name="deliveryType"
                              value={option.id}
                              checked={orderInfo.deliveryType === option.id}
                              onChange={(e) => setOrderInfo({ ...orderInfo, deliveryType: e.target.value })}
                              className="mr-4 w-5 h-5 text-green-600"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900">{option.label}</span>
                                <div className="text-right">
                                  <div className="font-bold text-green-600">
                                    {option.price === 0 ? "Free" : `$${option.price}`}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {option.priceKhmer === 0 ? "Free" : `${option.priceKhmer.toLocaleString()}៛`}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-300"
                    >
                      Proceed to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl">
                    <QrCode className="w-6 h-6 mr-3 text-green-600" />
                    Scan QR Code to Pay
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/payment-ICUDUXYBghJ22IE3xySKMwOCYEgSuR.png"
                      alt="Payment QR Code"
                      className="w-64 h-64 mx-auto mb-4"
                      onLoad={simulateQRScan}
                    />
                    <p className="text-gray-600 mb-2">Scan with your banking app</p>
                    <div className="text-2xl font-bold text-green-600 mb-1">${total.toFixed(2)}</div>
                    <div className="text-lg text-gray-600">{totalKhmer.toLocaleString()}៛</div>
                  </div>

                  {paymentScanned && (
                    <div className="mb-6 p-4 bg-green-100 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-green-800 font-medium">Payment detected! Click below to confirm.</p>
                    </div>
                  )}

                  <Button
                    onClick={handlePaymentDone}
                    disabled={!paymentScanned}
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      paymentScanned
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {paymentScanned ? "Payment Done" : "Waiting for Payment..."}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 shadow-xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">${(item.price * item.quantity).toFixed(2)}</div>
                        <div className="text-sm text-gray-500">
                          {(item.priceKhmer * item.quantity).toLocaleString()}៛
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t-2 border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <div className="text-right">
                      <div>${subtotal.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">{subtotalKhmer.toLocaleString()}៛</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <div className="text-right">
                      <div className={deliveryFee === 0 ? "text-green-600" : ""}>
                        {deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}
                      </div>
                      <div className="text-sm text-gray-500">
                        {deliveryFeeKhmer === 0 ? "Free" : `${deliveryFeeKhmer.toLocaleString()}៛`}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-3 border-t-2 border-gray-100">
                    <span>Total</span>
                    <div className="text-right">
                      <div className="text-green-600">${total.toFixed(2)}</div>
                      <div className="text-lg text-gray-600">{totalKhmer.toLocaleString()}៛</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
