"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Activity, AlertCircle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfileSetupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    conditions: [] as string[],
    allergies: [] as string[],
    lifestyle: [] as string[],
  });

  const conditions = [
    "Diabetes",
    "Hypertension",
    "Ulcers",
    "High Cholesterol",
    "None",
  ];

  const allergies = [
    "Peanuts",
    "Tree Nuts",
    "Dairy",
    "Gluten",
    "Shellfish",
    "Soy",
    "None",
  ];

  const lifestyles = [
    "Vegan",
    "Vegetarian",
    "Pescatarian",
    "Keto",
    "Halal",
    "Low Carb",
    "None",
  ];

  const toggleSelection = (category: keyof typeof formData, item: string) => {
    setFormData((prev) => {
      const list = prev[category];
      if (list.includes(item)) {
        return { ...prev, [category]: list.filter((i) => i !== item) };
      } else {
        return { ...prev, [category]: [...list, item] };
      }
    });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
            <span>Health Conditions</span>
            <span>Allergies</span>
            <span>Lifestyle</span>
            <span>Review</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Activity className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Any Health Conditions?</h2>
                <p className="text-gray-500">We'll recommend meals that are safe for you.</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {conditions.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleSelection("conditions", item)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-4 transition-all hover:border-primary",
                      formData.conditions.includes(item)
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-gray-200"
                    )}
                  >
                    <span className="font-medium text-gray-900">{item}</span>
                    {formData.conditions.includes(item) && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Any Allergies?</h2>
                <p className="text-gray-500">We'll hide meals containing these ingredients.</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {allergies.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleSelection("allergies", item)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-4 transition-all hover:border-primary",
                      formData.allergies.includes(item)
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-gray-200"
                    )}
                  >
                    <span className="font-medium text-gray-900">{item}</span>
                    {formData.allergies.includes(item) && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Heart className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Lifestyle Preferences</h2>
                <p className="text-gray-500">Help us tailor your meal recommendations.</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {lifestyles.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleSelection("lifestyle", item)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-4 transition-all hover:border-primary",
                      formData.lifestyle.includes(item)
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-gray-200"
                    )}
                  >
                    <span className="font-medium text-gray-900">{item}</span>
                    {formData.lifestyle.includes(item) && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Review Your Profile</h2>
                <p className="text-gray-500">You can update this anytime in your settings.</p>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Health Conditions</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.conditions.length > 0 ? (
                      formData.conditions.map(c => (
                        <span key={c} className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">{c}</span>
                      ))
                    ) : <span className="text-gray-500 text-sm">None selected</span>}
                  </div>
                </div>
                
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Allergies</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.allergies.length > 0 ? (
                      formData.allergies.map(c => (
                        <span key={c} className="inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700">{c}</span>
                      ))
                    ) : <span className="text-gray-500 text-sm">None selected</span>}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Lifestyle</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.lifestyle.length > 0 ? (
                      formData.lifestyle.map(c => (
                        <span key={c} className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">{c}</span>
                      ))
                    ) : <span className="text-gray-500 text-sm">None selected</span>}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="flex items-center rounded-full px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 4 ? (
              <button
                onClick={nextStep}
                className="flex items-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark"
              >
                Next Step <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/meals"
                className="flex items-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-dark"
              >
                Complete Setup <Check className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
