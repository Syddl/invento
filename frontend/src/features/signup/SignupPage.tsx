"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Check, Codesandbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  const features = [
    "Real-time inventory tracking",
    "Advanced analytics dashboard",
    "Automated low-stock alerts",
    "Multi-location support",
    "Supplier management",
    "Custom reporting tools",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Features */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
                <Codesandbox className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Invento</h1>
                <p className="text-sm text-neutral-500">Precision & Trust</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">
              Take control of your inventory with precision
            </h2>
            <p className="text-lg text-neutral-500">
              Join hundreds of small businesses who trust Invento for
              professional inventory management.
            </p>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-neutral-500">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="space-y-6 order-1 lg:order-2">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Create your account
            </h2>
            <p className="text-neutral-500">
              Get started with your free trial today
            </p>
          </div>

          <Card className="border-neutral-200 shadow-sm mt-1">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
              <form //onSubmit={handleSubmit}
                className="space-y-4 "
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={"formData.firstName"}
                      // onChange={(e) =>
                      //   handleChange("firstName", e.target.value)
                      // }
                      placeholder="John"
                      required
                      className="border-neutral-200 shadow-sm mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={"formData.lastName"}
                      // onChange={(e) => handleChange("lastName", e.target.value)}
                      placeholder="Doe"
                      required
                      className="border-neutral-200 shadow-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={"formData.email"}
                    // onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@company.com"
                    required
                    className="border-neutral-200 shadow-sm mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    //value={formData.company}
                    //onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Your Company Inc."
                    required
                    className="border-neutral-200 shadow-sm mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      //type={showPassword ? "text" : "password"}
                      //value={formData.password}
                      //onChange={(e) => handleChange("password", e.target.value)}
                      placeholder="Create a strong password"
                      required
                      className="border-neutral-200 shadow-sm mt-1"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      //onClick={() => setShowPassword(!showPassword)}
                    >
                      {/* {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )} */}
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      //type={showConfirmPassword ? "text" : "password"}
                      //value={formData.confirmPassword}
                      // onChange={(e) =>
                      //   handleChange("confirmPassword", e.target.value)
                      // }
                      placeholder="Confirm your password"
                      required
                      className="border-neutral-200 shadow-sm mt-1"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      // onClick={() =>
                      //   setShowConfirmPassword(!showConfirmPassword)
                      // }
                    >
                      {/* {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )} */}
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    //checked={formData.agreeToTerms}
                    // onChange={(e) =>
                    //   handleChange("agreeToTerms", e.target.checked)
                    // }
                    className="rounded border-gray-300 text-neutral-500 focus:ring-primary mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-neutral-900 text-white cursor-pointer hover:bg-neutral-800"
                  //disabled={isLoading}
                >
                  {/* {isLoading ? "Creating account..." : "Create Account"} */}
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
