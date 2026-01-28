"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, CreditCard, MapPin, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("momo");

  const handleOrder = () => {
    setStep(3);
  };

  if (step === 3) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto h-24 w-24 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
          <p className="text-gray-600">
            Your healthy meal is being prepared. You can track your order in the dashboard.
          </p>
          <div className="pt-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark"
            >
              Track Order
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-gray-900">Delivery Location</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Campus Location</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border">
                    <option>Valco Hall</option>
                    <option>Casford Hall</option>
                    <option>Kwame Nkrumah Hall</option>
                    <option>Science Market</option>
                    <option>Lecture Theatre Complex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Room Number / Specific Spot</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border" placeholder="e.g. Room 405" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border" defaultValue="+233 55 123 4567" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-gray-900">Payment Method</h2>
              </div>
              <div className="space-y-3">
                <label className={cn(
                  "flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-all",
                  paymentMethod === "momo" ? "border-primary bg-green-50 ring-1 ring-primary" : "border-gray-200 hover:border-gray-300"
                )}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="text-primary focus:ring-primary" checked={paymentMethod === "momo"} onChange={() => setPaymentMethod("momo")} />
                    <span className="font-medium text-gray-900">Mobile Money (MTN/Telecel)</span>
                  </div>
                  <span className="text-xs font-bold bg-yellow-400 text-yellow-900 px-2 py-1 rounded">Fastest</span>
                </label>
                
                <label className={cn(
                  "flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-all",
                  paymentMethod === "card" ? "border-primary bg-green-50 ring-1 ring-primary" : "border-gray-200 hover:border-gray-300"
                )}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="text-primary focus:ring-primary" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                    <span className="font-medium text-gray-900">Credit / Debit Card</span>
                  </div>
                </label>

                <label className={cn(
                  "flex items-center justify-between rounded-lg border p-4 cursor-pointer transition-all",
                  paymentMethod === "cash" ? "border-primary bg-green-50 ring-1 ring-primary" : "border-gray-200 hover:border-gray-300"
                )}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="text-primary focus:ring-primary" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} />
                    <span className="font-medium text-gray-900">Pay on Delivery</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Order</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Low-Salt Banku + Tilapia (x1)</span>
                <span className="font-medium">GHS 35.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Vegan Jollof Bowl (x2)</span>
                <span className="font-medium">GHS 60.00</span>
              </div>
              <div className="border-t border-gray-100 pt-2 flex justify-between text-sm">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium">GHS 10.00</span>
              </div>
              <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>GHS 105.00</span>
              </div>
            </div>
            
            <button
              onClick={handleOrder}
              className="w-full rounded-full bg-primary py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark transition-all"
            >
              Pay GHS 105.00
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">
              Secure payment processed by Paystack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
