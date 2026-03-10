export const meals = [
  {
    id: "1",
    name: "Nutrition-Dense Low-Fat Banku & Tilapia",
    description:
      "High-quality, chaff-free corn and cassava dough cooked into smooth banku, served with grilled fresh tilapia and a low-salt pepper, tomato, onion, garlic, and ginger sauce. Designed to be flavourful yet gentle on blood pressure.",
    price: 35,
    image: "/assets/banku-and-tilapia.jpeg",
    calories: 450,
    tags: ["Low Salt", "Hypertension Friendly", "High Protein"],
    category: "Local",
    rating: 4.8,
    ingredients: [
      "High-quality chaff-free corn dough",
      "High-quality chaff-free cassava dough",
      "Fresh tilapia",
      "Fresh pepper",
      "Fresh tomatoes",
      "Fresh onions",
      "Fresh garlic",
      "Fresh ginger",
      "Low salt",
    ],
  },
  {
    id: "2",
    name: "Vegan Jollof Bowl",
    description:
      "Smoky jasmine jollof rice cooked with fresh tomatoes, thyme, curry, gluten-free vegetable bouillon and thickener-free tomato paste, topped with ripe plantain. 100% plant-based and low in added salt.",
    price: 30,
    image: "/assets/vegan-jollof-bowl.jpeg",
    calories: 380,
    tags: ["Vegan", "Dairy Free", "High Fiber"],
    category: "Rice",
    rating: 4.9,
    ingredients: [
      "Jasmine rice",
      "Fresh tomatoes",
      "Thyme",
      "Curry powder",
      "Gluten-free vegetable bouillon cubes",
      "Thickener-free tomato paste",
      "Low salt",
      "Ripe plantains",
    ],
  },
  {
    id: "3",
    name: "Gluten-Free Waakye Pack",
    description:
      "Classic waakye prepared with basmati rice and bambara beans, served with grilled chicken, fresh lettuce and tomatoes, and a pepper, onion, and ginger blend. Crafted to avoid gluten contamination.",
    price: 40,
    image: "/assets/glutten-free-waakye.jpeg",
    calories: 520,
    tags: ["Gluten Free", "High Protein"],
    category: "Local",
    rating: 4.7,
    ingredients: [
      "Basmati rice",
      "Bambara beans",
      "Grilled chicken",
      "Pepper",
      "Onions",
      "Ginger",
      "Salt",
      "Lettuce",
      "Tomatoes",
    ],
  },

  {
    id: "5",
    name: "Grilled Chicken Salad",
    description:
      "A colourful salad of lettuce, broccoli, cucumber, tomatoes, onions, potatoes, and crunchy croutons, topped with high-quality grilled chicken and a gluten-free dressing.",
    price: 55,
    image: "/assets/grilled-chicken-salad.jpeg",
    calories: 320,
    tags: ["Low Calorie", "Keto Friendly"],
    category: "Salad",
    rating: 4.8,
    ingredients: [
      "Lettuce",
      "Broccoli",
      "Cucumber",
      "Tomatoes",
      "Onions",
      "Potatoes",
      "Croutons",
      "Gluten-free salad dressing",
      "High-quality grilled chicken",
    ],
  },
  {
    id: "7",
    name: "Hypertension-Friendly Fried Rice",
    description:
      "Stir-fried jasmine rice with carrots, onions, bell peppers, cucumber, and spring onions, prepared in low-cholesterol oil with reduced salt and served with high-quality grilled chicken.",
    price: 38,
    image: "/assets/fried-rice.jpeg",
    calories: 420,
    tags: ["Hypertension Friendly", "Low Cholesterol"],
    category: "Rice",
    rating: 4.7,
    ingredients: [
      "Jasmine rice",
      "Carrots",
      "Onions",
      "Bell pepper",
      "Cucumber",
      "Spring onions",
      "Reduced salt seasoning",
      "Low cholesterol oil",
      "High-quality grilled chicken",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Kwame Mensah",
    role: "UCC Student",
    content: "Finally, I can eat Waakye without worrying about my allergies. CHOPWELL is a lifesaver!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Ama Osei",
    role: "Lecturer",
    content: "The low-salt meal plans have helped me manage my hypertension effectively. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Dr. Appiah",
    role: "Nutritionist",
    content: "A platform that actually prioritizes health over just convenience. The dietary profiles are excellent.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  }
];

export const features = [
  {
    title: "Personalized Diet",
    description: "Meals tailored to your health conditions, allergies, and lifestyle goals.",
    icon: "User",
  },
  {
    title: "Expert Approved",
    description: "Every meal is reviewed by certified nutritionists and dieticians.",
    icon: "Award",
  },
  {
    title: "Campus Delivery",
    description: "Fast delivery to your hostel, lecture hall, or pickup points.",
    icon: "Truck",
  },
  {
    title: "Flexible Plans",
    description: "One-time orders or monthly subscriptions to save money.",
    icon: "Calendar",
  }
];
