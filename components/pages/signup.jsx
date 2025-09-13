"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, ArrowLeft, Check, X } from "lucide-react";

export function SignUpPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(formData.password) },
    { text: "Contains number", met: /\d/.test(formData.password) },
  ];

  const passwordsMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) return;

    setIsLoading(true);

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      onNavigate("login");
    }, 2000);
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    passwordRequirements.every((req) => req.met) &&
    passwordsMatch &&
    acceptTerms;

  return (
    <div className="flex h-screen">
      {/* Left section with signup form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm">
          <Card className="shadow-none border-0 mb-4">
            <CardHeader className="text-left pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Create Account
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Join PhsarKhmer and start shopping
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 sr-only"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 sr-only"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 sr-only"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 sr-only"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 sr-only"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {formData.password && (
                    <div className="mt-2 space-y-1 text-sm">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center text-xs">
                          {req.met ? (
                            <Check className="w-3 h-3 text-green-500 mr-2" />
                          ) : (
                            <X className="w-3 h-3 text-red-500 mr-2" />
                          )}
                          <span
                            className={
                              req.met ? "text-green-600" : "text-red-600"
                            }
                          >
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 sr-only"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {formData.confirmPassword && (
                    <div className="mt-1 flex items-center text-xs">
                      {passwordsMatch ? (
                        <>
                          <Check className="w-3 h-3 text-green-500 mr-2" />
                          <span className="text-green-600">
                            Passwords match
                          </span>
                        </>
                      ) : (
                        <>
                          <X className="w-3 h-3 text-red-500 mr-2" />
                          <span className="text-red-600">
                            Passwords don't match
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    id="accept-terms"
                    name="accept-terms"
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
                  />
                  <label
                    htmlFor="accept-terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!isFormValid || isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => onNavigate("login")}
                    className="text-green-600 hover:text-green-500 font-medium"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right section with background image and text */}
      <div
        className="hidden lg:flex w-1/2 relative items-center justify-center p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/2c/88/92/2c8892f5f797ec03db27b0b527eaafa1.gif')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <span className="ml-2 text-2xl font-bold">Phsar Khmer</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 mt-6">Create Your Account</h1>
          <p className="text-lg">
            Join our community and explore a world of authentic Cambodian
            products
          </p>
          <div className="mt-8 text-left space-y-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-flag-triangle-left mr-3"
              >
                <path d="M17.5 5H22l-5 5L22 15h-4.5M2 8v8h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" />
              </svg>
              <span>Authentic Cambodian Products</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rocket mr-3"
              >
                <path d="M4.5 16.5c-1.5 1.26-2.5 2.52-2.5 4.5 0 2.5 2.5 2.5 2.5 2.5s2.5 0 2.5-2.5c0-2-1-3.24-2.5-4.5l-1-.96a4 4 0 1 1-6-6l.96-1a4.5 4.5 0 0 1 4.5-4.5h4.5a2.5 2.5 0 0 1 2.5 2.5V12a2.5 2.5 0 0 1-2.5 2.5H16" />
                <path d="M12 18.5a4.5 4.5 0 0 0 4.5-4.5V9a2.5 2.5 0 0 0-2.5-2.5h-4.5a4.5 4.5 0 0 0-4.5 4.5V18.5" />
                <path d="M12 18.5a4.5 4.5 0 0 0 4.5 4.5" />
              </svg>
              <span>Global Shipping</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-handshake mr-3"
              >
                <path d="m12 15-4-4" />
                <path d="m14 17.5 2-2.5" />
                <path d="M17 19c-.2-.49-.7-.86-1.12-1.25M17 19c-1.4 1.5-3.2 2-5 2-2.2 0-4.2-1-5.5-2.7a2 2 0 0 1-2-1.7V9.5A2.5 2.5 0 0 1 8.5 7h4a2.5 2.5 0 0 1 2.5 2.5V15.5a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5V13c-.1-.5-.5-1-1-1.5" />
                <path d="M16 11c-.3.5-.7 1-1.5 1.5h-.5" />
              </svg>
              <span>Support Local Artisans</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
