"use client";

import { useState } from "react";
import RoleDashboard from "@/components/RoleDashboard";
import { 
  Users, 
  ClipboardList, 
  UtensilsCrossed, 
  Truck, 
  BarChart3, 
  Calendar,
  ChefHat,
  Store,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

import RiderMap from "@/components/RiderMap";

// ... (imports remain same)

export default function DashboardPage() {
  const [currentRole, setCurrentRole] = useState("nutritionist");

  const roles = ["nutritionist", "chef", "vendor", "rider", "admin"];

  const renderContent = () => {
    switch (currentRole) {
      // ... (Nutritionist and Chef cases remain same)
      case "nutritionist":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Pending Reviews</h3>
                  <ClipboardList className="h-5 w-5 text-orange-500" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500 mt-1">Dietary profiles needing approval</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Consultations</h3>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">4</p>
                <p className="text-xs text-gray-500 mt-1">Scheduled for today</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Active Plans</h3>
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">156</p>
                <p className="text-xs text-gray-500 mt-1">Students on meal plans</p>
              </div>
            </div>

            <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Recent Dietary Requests</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                        S{i}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Student Name {i}</p>
                        <p className="text-sm text-gray-500">Requesting: Vegan + Low Salt</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100">
                        Approve
                      </button>
                      <button className="rounded-lg bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "chef":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Active Orders</h3>
                  <UtensilsCrossed className="h-5 w-5 text-orange-500" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">28</p>
                <p className="text-xs text-gray-500 mt-1">To be prepared now</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Special Diets</h3>
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">5</p>
                <p className="text-xs text-gray-500 mt-1">Allergy/Medical alerts</p>
              </div>
            </div>

            <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Kitchen Queue</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 font-bold">
                        #{100 + i}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Low-Salt Banku + Tilapia</p>
                        <div className="flex gap-2 mt-1">
                          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                            No Salt
                          </span>
                          <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700">
                            No Pepper
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                      Mark Ready
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "vendor":
        return (
          <div className="space-y-6">
             <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                  <BarChart3 className="h-5 w-5 text-green-500" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">GHS 1,250</p>
                <p className="text-xs text-gray-500 mt-1">This week</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Orders</h3>
                  <Store className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">45</p>
                <p className="text-xs text-gray-500 mt-1">Completed today</p>
              </div>
            </div>
            
            {/* Vendor Menu Management */}
            <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">My Menu</h3>
                <button className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                  + Add New Meal
                </button>
              </div>
              <div className="divide-y divide-gray-100">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg bg-gray-100 overflow-hidden">
                        <img src={`https://source.unsplash.com/random/100x100?food&sig=${i}`} alt="Food" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Tasty Meal Option {i}</p>
                        <p className="text-sm text-gray-500">GHS 35.00 • 450 kcal</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-primary font-medium hover:underline">Edit</button>
                      <button className="text-sm text-red-500 font-medium hover:underline">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "rider":
        return (
           <div className="space-y-6">
             <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">Deliveries</h3>
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">8</p>
                <p className="text-xs text-gray-500 mt-1">Pending pickup</p>
              </div>
            </div>
            
            {/* Rider Map Integration */}
            <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden p-6">
              <h3 className="font-bold text-gray-900 mb-4">Live Route Map</h3>
              <RiderMap />
            </div>

             <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Delivery Queue</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div>
                        <p className="font-medium text-gray-900">Order #{200+i}</p>
                        <p className="text-sm text-gray-500">Pickup: Science Market &rarr; Dropoff: Valco Hall</p>
                    </div>
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                      Start Trip
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-12 text-center text-gray-500">Select a role to view dashboard</div>;
    }
  };

  // ... (getSidebarItems and return remain same)
  const getSidebarItems = () => {
    const common = [{ name: "Settings", icon: Users, href: "#" }];
    switch (currentRole) {
      case "nutritionist":
        return [
          { name: "Overview", icon: BarChart3, href: "#", active: true },
          { name: "Consultations", icon: Calendar, href: "#" },
          { name: "Dietary Profiles", icon: ClipboardList, href: "#" },
          ...common
        ];
      case "chef":
        return [
          { name: "Kitchen View", icon: ChefHat, href: "#", active: true },
          { name: "Orders", icon: UtensilsCrossed, href: "#" },
          ...common
        ];
       case "vendor":
        return [
          { name: "Store", icon: Store, href: "#", active: true },
          { name: "Menu", icon: ClipboardList, href: "#" },
          ...common
        ];
       case "rider":
        return [
          { name: "Deliveries", icon: Truck, href: "#", active: true },
          ...common
        ];
      default:
        return common;
    }
  };

  return (
    <div>
      {/* Role Switcher for Demo */}
      <div className="bg-gray-900 p-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-sm font-medium text-gray-400">Prototype Mode: Viewing as</span>
          <div className="flex gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setCurrentRole(role)}
                className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  currentRole === role
                    ? "bg-primary text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      <RoleDashboard role={currentRole} sidebarItems={getSidebarItems()}>
        {renderContent()}
      </RoleDashboard>
    </div>
  );
}
