import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                C
              </div>
              <span className="text-xl font-bold tracking-tight text-primary-dark">
                CHOPWELL
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Healthy eating made personal, affordable, and effortless — powered by nutrition experts and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/meals" className="text-sm text-gray-500 hover:text-primary">
                  Browse Meals
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-sm text-gray-500 hover:text-primary">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/nutritionists" className="text-sm text-gray-500 hover:text-primary">
                  Consult Nutritionists
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-sm text-gray-500 hover:text-primary">
                  For Vendors
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-500 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-sm text-gray-500 hover:text-primary">
                  Food Safety
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>Science Market, University of Cape Coast, Ghana</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+233 55 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>hello@chopwell.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CHOPWELL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
