"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export function LoginPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onNavigate("home");
    }, 1500);
  };

  return (
    <div className="flex h-screen">
      {/* Left section with background image and text */}
      <div
        className="hidden lg:flex w-1/2 relative items-center justify-center p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/ee/3c/15/ee3c156ec4646201c7314fad4f47ce7a.gif')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <span className="ml-2 text-2xl font-bold">Phsar Khmer</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 mt-6">Welcome Back!</h1>
          <p className="text-lg">
            Discover a wide variety of authentic Cambodian products
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

      {/* Right section with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <Card className="shadow-none border-0 w-full max-w-sm">
          <CardHeader className="text-left pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Sign In
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Access your Phsar Khmer account
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 sr-only"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 sr-only"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pr-10 pl-10"
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-emerald-600 hover:text-emerald-500"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Login"}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => onNavigate("signup")}
                  className="text-emerald-600 hover:text-emerald-500 font-medium"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
