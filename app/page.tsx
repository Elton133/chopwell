import Link from "next/link";
import { ArrowRight, CheckCircle2, ChefHat, HeartPulse, Leaf } from "lucide-react";
import MealCard from "@/components/MealCard";
import { meals, testimonials, features } from "@/lib/data";

export default function Home() {
  const featuredMeals = meals.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white pt-16 pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
                Now serving UCC Campus
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Healthy Eating Made <span className="text-primary">Personal</span> & <span className="text-secondary">Effortless</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                CHOPWELL solves the campus food problem. Get safe, customized, nutrition-guided meals delivered to your doorstep. Perfect for diabetes, ulcers, allergies, or just staying fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/meals"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:-translate-y-1"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/auth/register"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-gray-900 shadow-md ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:-translate-y-1"
                >
                  Create Diet Profile
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={`https://randomuser.me/api/portraits/thumb/men/${i * 10}.jpg`}
                      alt=""
                    />
                  ))}
                </div>
                <p>Trusted by 500+ students & staff</p>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative rounded-3xl bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:m-4 lg:rounded-[2.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1000"
                  alt="Healthy food spread"
                  className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10 w-full object-cover"
                />
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Dietary Goal</p>
                      <p className="text-lg font-bold text-gray-900">Vegan Friendly</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 hidden md:block rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Health Safety</p>
                      <p className="text-lg font-bold text-gray-900">Allergy Safe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Why Choose CHOPWELL</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              More than just food delivery. It's your health partner.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  {feature.icon === "User" && <CheckCircle2 className="h-6 w-6" />}
                  {feature.icon === "Award" && <ChefHat className="h-6 w-6" />}
                  {feature.icon === "Truck" && <ArrowRight className="h-6 w-6" />} {/* Placeholder icon */}
                  {feature.icon === "Calendar" && <Leaf className="h-6 w-6" />} {/* Placeholder icon */}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Healthy Meals</h2>
              <p className="mt-2 text-gray-500">Curated by our expert nutritionists.</p>
            </div>
            <Link href="/meals" className="hidden sm:flex items-center text-primary font-medium hover:text-primary-dark">
              View Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Link href="/meals" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-16">What our community says</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-2xl bg-gray-50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to eat healthier?
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-10">
            Join hundreds of students and staff at UCC who are transforming their lifestyle with CHOPWELL.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-all hover:bg-gray-100 hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
