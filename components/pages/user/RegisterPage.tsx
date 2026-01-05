"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";

export default function RegisterPage() {
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
        <CardTitle className="text-lg font-medium text-white/90">Create an account</CardTitle>
        <CardDescription className="text-sm font-medium text-white/90">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your email..."
                required
                className="
                  text-white
                  placeholder:text-white/60
                  bg-white/20
                  border-white/30
                  focus-visible:ring-white/40
                "
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="******"
                required
                className="
                  text-white
                  placeholder:text-white/60
                  bg-white/20
                  border-white/30
                  focus-visible:ring-white/40
                "
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                placeholder="******"
                required
                className="
                  text-white
                  placeholder:text-white/60
                  bg-white/20
                  border-white/30
                  focus-visible:ring-white/40
                "
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white" type="submit">
                  Create account
                </Button>
                <Button
                  className="bg-transparent hover:text-teal-500"
                  variant="outline"
                  type="button"
                >
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center text-white">
                  Already have an account?
                  <Link href="/login" passHref>
                    <Button className="text-white font-semi-bold" variant="link">
                      Sign in
                    </Button>
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
