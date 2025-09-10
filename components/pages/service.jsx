"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Truck, Shield, RotateCcw, Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react"

export function ServicePage() {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Fast & Reliable Delivery",
      description: "Same-day delivery within Phnom Penh, nationwide shipping available",
      details: [
        "Same-day delivery for orders placed before 2 PM",
        "Free delivery for orders over $25",
        "Real-time tracking available",
        "Nationwide coverage across Cambodia",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our products",
      details: [
        "Fresh products guaranteed",
        "Quality checked before shipping",
        "30-day money-back guarantee",
        "Certified organic products",
      ],
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-green-600" />,
      title: "Easy Returns",
      description: "Hassle-free return process within 30 days",
      details: ["30-day return policy", "Free return shipping", "Quick refund processing", "No questions asked policy"],
    },
  ]

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone Support",
      info: "+855 12 345 678",
      description: "Call us for immediate assistance",
      availability: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email Support",
      info: "support@phsarkhmer.com",
      description: "Send us your questions anytime",
      availability: "Response within 24 hours",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "Live Chat",
      info: "Available on website",
      description: "Chat with our support team",
      availability: "Mon-Fri: 9AM-5PM",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Visit Our Store",
      info: "123 Riverside Blvd, Phnom Penh",
      description: "Come see our products in person",
      availability: "Mon-Sun: 8AM-8PM",
    },
  ]

  const faqs = [
    {
      question: "How fresh are your products?",
      answer:
        "All our products are sourced daily from local farms and suppliers. Vegetables and fruits are harvested within 24 hours of delivery, ensuring maximum freshness and nutritional value.",
    },
    {
      question: "Do you deliver outside Phnom Penh?",
      answer:
        "Yes, we deliver nationwide across Cambodia. Delivery times vary by location: same-day in Phnom Penh, 1-2 days for major cities, and 2-5 days for remote areas.",
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied, contact us and we'll arrange a return and full refund, no questions asked.",
    },
    {
      question: "Are your products organic?",
      answer:
        "Many of our products are certified organic, clearly marked on each product page. We work directly with local organic farmers and certified suppliers.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email and SMS. You can track your order in real-time through our website or mobile app.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and mobile payments including ABA Pay, Wing, and Pi Pay for your convenience.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Service</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            We're here to help you have the best shopping experience with PhsarKhmer. Find answers to your questions or
            get in touch with our support team.
          </p>
          <div className="flex justify-center">
            <img src="/delivery-service.gif" alt="Fast Delivery Service" className="w-64 h-48 object-contain" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Our Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service at every step of your shopping journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Choose the contact method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-green-600 font-medium mb-2">{method.info}</p>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  <p className="text-xs text-gray-500">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Hours */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Customer Support</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Store Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Sunday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Public Holidays</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <p className="text-gray-600">
                Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input placeholder="What can we help you with?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    rows={5}
                    placeholder="Please describe your question or concern in detail..."
                  />
                </div>
                <Button className="w-full md:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
