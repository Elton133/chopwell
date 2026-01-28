"use client";

import Link from "next/link";
import { Trash2, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Low-Salt Banku + Tilapia",
      price: 35,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=200",
      customizations: ["No Salt", "Extra Spicy"],
    },
    {
      id: 2,
      name: "Vegan Jollof Bowl",
      price: 30,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1574484284008-be9d62827022?auto=format&fit=crop&q=80&w=200",
      customizations: [],
    },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 10;
  const total = subtotal + deliveryFee;

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="font-bold text-gray-900">GHS {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {item.customizations.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-2 py-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600 p-2">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {items.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/meals" className="text-primary font-medium hover:underline">
                  Browse Meals
                </Link>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>GHS {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>GHS {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>GHS {total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark transition-all"
            >
              Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
