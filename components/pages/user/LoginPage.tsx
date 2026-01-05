"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card
      className="
      relative
      w-full max-w-md
      bg-transparent
      backdrop-blur-lg
      border border-white/40
      shadow-2xl
      text-white
      "
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium text-white/90">Login to your account</CardTitle>
        <CardDescription className="text-sm font-medium text-white/90">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Link href="/register" passHref>
            <Button className="text-lg text-white/90" variant="link">
              Sign Up
            </Button>
          </Link>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel className="text-md font-medium text-white/90">Email</FieldLabel>
              <Input
                className="
                  text-white
                  placeholder:text-white/60
                  bg-white/20
                  border-white/30
                  focus-visible:ring-white/40
                "
                id="email"
                type="email"
                name="email"
                placeholder="Your email..."
                required
              />
            </Field>
            <Field>
              <FieldLabel className="text-md font-medium text-white/90">Password</FieldLabel>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="******"
                  required
                  className="
                  text-white
                  placeholder:text-white/60
                  bg-white/20
                  border-white/30
                  focus-visible:ring-white/40
                  pr-14
                "
                />
                <button
                  type="button"
                  aria-label="Clear input"
                  className="absolute top-1/2 right-2 -translate-y-1/2
         h-11 w-11 flex items-center justify-center
         rounded-md
         text-gray-500 hover:text-gray-700
         focus-visible:outline-none
         focus-visible:ring-2 focus-visible:ring-[#004844]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-white" size={18} />
                  ) : (
                    <Eye className="text-white" size={18} />
                  )}
                </button>
              </div>
            </Field>

            <Field>
              <Button className="bg-[#004844] text-white hover:bg-[#00665f]" type="submit">
                Login
              </Button>
              <Button variant="outline" className="bg-transparent hover:text-teal-500">
                Login with Google
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
