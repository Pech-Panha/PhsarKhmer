"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Truck,
  Shield,
  RotateCcw,
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

export function ServicePage() {
  const services = [
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Fast & Reliable Delivery",
      description:
        "Same-day delivery within Phnom Penh, nationwide shipping available",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our products",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-green-600" />,
      title: "Easy Returns",
      description: "Hassle-free return process within 30 days",
    },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Customer Service
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We're here to support you. Find quick answers or connect with our
            dedicated team for a seamless shopping experience.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* 2. Our Core Services Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Your satisfaction is our priority. We go the extra mile to ensure
            your experience is simple, secure, and delightful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. How It Works Section */}
        <section className="mb-16 py-16 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-10">
            From Our Farm to Your Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            <div className="flex flex-col items-center">
              <RotateCcw className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">You Order</h3>
              <p className="text-gray-600 text-sm">
                Select fresh, local produce from our wide catalog.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">We Prepare & Ship</h3>
              <p className="text-gray-600 text-sm">
                Our team hand-picks and packs your order with care.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Delivered Fresh</h3>
              <p className="text-gray-600 text-sm">
                Receive your fresh ingredients right at your doorstep.
              </p>
            </div>
          </div>
        </section>

        {/* 4. FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-left hover:no-underline">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm pl-8 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 5. Need More Help? Contact Section */}
        <section className="py-16 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Need More Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
            {/* Visual on the Left */}
            <div className="flex items-center justify-center relative">
              <Image
                src="/delivery-service.gif"
                alt="Fast Delivery Service"
                width={500}
                height={400}
                className="rounded-lg object-contain shadow-md"
              />
            </div>

            {/* Contact Methods & Form on the Right */}
            <div className="space-y-8">
              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="flex flex-col items-center p-4 text-center">
                  <Phone className="w-8 h-8 text-green-600 mb-2" />
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-gray-600">+855 12 345 678</p>
                </Card>
                <Card className="flex flex-col items-center p-4 text-center">
                  <Mail className="w-8 h-h text-green-600 mb-2" />
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-600">
                    support@phsarkhmer.com
                  </p>
                </Card>
                <Card className="flex flex-col items-center p-4 text-center">
                  <MessageCircle className="w-8 h-8 text-green-600 mb-2" />
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm text-gray-600">
                    Chat with our support team
                  </p>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    aria-label="Your Name"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <Textarea
                    placeholder="Please describe your question or concern..."
                    rows={4}
                    aria-label="Your Message"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
