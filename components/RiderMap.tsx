import { MapPin } from "lucide-react";

export default function RiderMap() {
  return (
    <div className="relative w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden border border-gray-300">
      {/* Background Map Simulation */}
      <div 
        className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/OpenStreetMap_Logo_2011.svg/1024px-OpenStreetMap_Logo_2011.svg.png')] bg-cover bg-center"
        style={{ filter: "grayscale(100%)" }}
      ></div>
      
      {/* Grid Lines to simulate map */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="border border-gray-300/20"></div>
        ))}
      </div>

      {/* Markers */}
      <div className="absolute top-1/4 left-1/4 flex flex-col items-center animate-bounce">
        <MapPin className="h-8 w-8 text-primary fill-current drop-shadow-md" />
        <span className="bg-white px-2 py-1 rounded-md text-xs font-bold shadow-md">Science Market (Pickup)</span>
      </div>

      <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center animate-bounce" style={{ animationDelay: "0.5s" }}>
        <MapPin className="h-8 w-8 text-red-500 fill-current drop-shadow-md" />
        <span className="bg-white px-2 py-1 rounded-md text-xs font-bold shadow-md">Valco Hall (Dropoff)</span>
      </div>

      {/* Route Line Simulation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path 
          d="M 200 100 Q 400 150 600 250" 
          fill="none" 
          stroke="#10B981" 
          strokeWidth="4" 
          strokeDasharray="8 4"
          className="drop-shadow-sm"
        />
      </svg>

      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg text-xs">
        <p className="font-bold">Estimated Time</p>
        <p className="text-gray-500">12 mins</p>
      </div>
    </div>
  );
}
