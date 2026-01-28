"use client";

import { useState } from "react";
import { Filter, Search } from "lucide-react";
import MealCard from "@/components/MealCard";
import { meals } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function MealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Local", "Rice", "Soup", "Salad", "Vegan"];

  const filteredMeals = meals.filter((meal) => {
    const matchesCategory = selectedCategory === "All" || meal.category === selectedCategory || (selectedCategory === "Vegan" && meal.tags.includes("Vegan"));
    const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase()) || meal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Explore Meals</h1>
            <p className="mt-1 text-gray-500">Nutritious meals tailored to your needs.</p>
          </div>
          
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-full border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Search meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
          <div className="flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <div className="flex items-center px-3 text-gray-500">
              <Filter className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Filters</span>
            </div>
            <div className="h-6 w-px bg-gray-200 mx-1"></div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                  selectedCategory === category
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        {filteredMeals.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500">No meals found matching your criteria.</p>
            <button 
              onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
