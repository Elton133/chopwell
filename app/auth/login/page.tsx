"use client";

import Link from "next/link";
import { useState } from "react";
import { User, ChefHat, Stethoscope, Truck, Store, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("customer");

  const roles = [
    { id: "customer", label: "Customer", icon: User },
    { id: "nutritionist", label: "Nutritionist", icon: Stethoscope },
    { id: "chef", label: "Chef", icon: ChefHat },
    { id: "vendor", label: "Vendor", icon: Store },
    { id: "rider", label: "Rider", icon: Truck },
  ];

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome back to CHOPWELL
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Select your role to continue
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl border p-2 transition-all hover:border-primary hover:bg-green-50",
                  selectedRole === role.id
                    ? "border-primary bg-green-50 ring-1 ring-primary"
                    : "border-gray-200 bg-white"
                )}
              >
                <Icon className={cn("h-6 w-6 mb-1", selectedRole === role.id ? "text-primary" : "text-gray-500")} />
                <span className={cn("text-[10px] font-medium", selectedRole === role.id ? "text-primary" : "text-gray-500")}>
                  {role.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-primary hover:text-primary-dark">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <Link
                href={selectedRole === "customer" ? "/meals" : "/dashboard"}
                className="flex w-full justify-center rounded-full bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign in as {roles.find(r => r.id === selectedRole)?.label} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link href="/auth/register" className="font-semibold leading-6 text-primary hover:text-primary-dark">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
