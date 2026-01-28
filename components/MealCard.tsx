import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface MealCardProps {
  meal: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    calories: number;
    tags: string[];
    rating: number;
  };
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <Link href={`/meals/${meal.id}`} className="group block h-full">
      <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={meal.image}
            alt={meal.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm">
            GHS {meal.price.toFixed(2)}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium text-gray-700">{meal.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Flame className="h-4 w-4" />
              <span className="text-sm">{meal.calories} kcal</span>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-primary line-clamp-1">
            {meal.name}
          </h3>
          <p className="mb-4 text-sm text-gray-500 line-clamp-2">
            {meal.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {meal.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
              >
                {tag}
              </span>
            ))}
            {meal.tags.length > 2 && (
              <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                +{meal.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
