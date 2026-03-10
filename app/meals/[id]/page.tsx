"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingCart, Star, Clock, Flame, AlertCircle, Check } from "lucide-react";
import { meals } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function MealDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const meal = meals.find((m) => m.id === id) || meals[0];

  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState({
    noSalt: false,
    extraSpicy: false,
    noOnions: false,
  });

  const ingredients = meal.ingredients ?? [
    "Fresh tilapia",
    "Corn dough",
    "Cassava dough",
    "Tomatoes",
    "Onions",
    "Pepper",
  ];

  const handleAddToCart = () => {
    const query = new URLSearchParams({
      id: meal.id,
      name: meal.name,
      price: String(meal.price),
      image: meal.image,
      quantity: String(quantity),
    });

    if (customizations.noSalt) query.append("custom", "No Salt");
    if (customizations.extraSpicy) query.append("custom", "Extra Spicy");
    if (customizations.noOnions) query.append("custom", "No Onions");

    router.push(`/cart?${query.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Image Header */}
      <div className="relative h-80 sm:h-96 w-full">
        <img
          src={meal.image}
          alt={meal.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <Link
            href="/meals"
            className="flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/30"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
          </Link>
        </div>
      </div>

      <div className="relative mx-auto -mt-10 max-w-4xl rounded-t-3xl bg-white px-6 pt-8 pb-12 sm:px-8 shadow-lg z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {meal.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{meal.name}</h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium">{meal.rating} (120 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame className="h-4 w-4" />
                <span>{meal.calories} kcal</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>25-35 min</span>
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold text-primary">
            GHS {meal.price.toFixed(2)}
          </div>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* Description & Ingredients */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">{meal.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Ingredients</h2>
              <ul className="grid grid-cols-2 gap-2">
                {ingredients.map((ing) => (
                  <li key={ing} className="flex items-center text-gray-600">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-orange-50 p-4 border border-orange-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-orange-900">Dietary Note</h3>
                  <p className="text-sm text-orange-700 mt-1">
                    This meal is prepared in a kitchen that also handles nuts. Please inform us if you have severe allergies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customization & Order */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Customize your meal</h2>
            
            <div className="space-y-3 mb-8">
              <label className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm cursor-pointer border border-transparent hover:border-primary">
                <span className="text-gray-700">No Salt (Hypertension)</span>
                <div 
                  className={cn("h-5 w-5 rounded border flex items-center justify-center", customizations.noSalt ? "bg-primary border-primary text-white" : "border-gray-300")}
                  onClick={() => setCustomizations(c => ({...c, noSalt: !c.noSalt}))}
                >
                  {customizations.noSalt && <Check className="h-3 w-3" />}
                </div>
              </label>
              <label className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm cursor-pointer border border-transparent hover:border-primary">
                <span className="text-gray-700">Extra Spicy</span>
                <div 
                  className={cn("h-5 w-5 rounded border flex items-center justify-center", customizations.extraSpicy ? "bg-primary border-primary text-white" : "border-gray-300")}
                  onClick={() => setCustomizations(c => ({...c, extraSpicy: !c.extraSpicy}))}
                >
                  {customizations.extraSpicy && <Check className="h-3 w-3" />}
                </div>
              </label>
              <label className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm cursor-pointer border border-transparent hover:border-primary">
                <span className="text-gray-700">No Onions</span>
                <div 
                  className={cn("h-5 w-5 rounded border flex items-center justify-center", customizations.noOnions ? "bg-primary border-primary text-white" : "border-gray-300")}
                  onClick={() => setCustomizations(c => ({...c, noOnions: !c.noOnions}))}
                >
                  {customizations.noOnions && <Check className="h-3 w-3" />}
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between mb-8">
              <span className="font-medium text-gray-900">Quantity</span>
              <div className="flex items-center gap-4 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-500 hover:text-primary"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-4 text-center font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-500 hover:text-primary"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center rounded-full bg-primary py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:-translate-y-1"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Order (GHS {(meal.price * quantity).toFixed(2)})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
