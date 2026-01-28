"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meals", href: "/meals" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
            C
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-dark">
            CHOPWELL
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/cart" className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
              2
            </span>
          </Link>
          
          {isLoggedIn ? (
             <Link href="/dashboard" className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
               <User className="h-4 w-4" />
               <span>Account</span>
             </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/auth/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Log in
              </Link>
              <Link
                href="/auth/register"
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Actions & Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Link href="/cart" className="relative p-2 text-gray-500 hover:text-primary">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
              2
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3">
            {/* Mobile Search */}
            <div className="mb-4 relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-full border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Search meals..."
              />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-4 px-3">
                <Link
                  href="/auth/login"
                  className="block w-full rounded-full bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/auth/register"
                  className="block w-full rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
