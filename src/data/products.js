// Sample product data for a clothing e-commerce store using Unsplash images
export const products = [
  {
    id: 1,
    name: "Alpine Classic",
    category: "Accessories",
    price: 149,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    description: "Timeless design meets modern functionality. The Alpine Classic features premium materials and contemporary design.",
    featured: true
  },
  {
    id: 2,
    name: "Alpine Sport",
    category: "Men",
    price: 189,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    description: "Built for adventure. These sport items offer superior quality and durability for active lifestyles.",
    featured: true
  },
  {
    id: 3,
    name: "Alpine Urban",
    category: "Women",
    price: 129,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop",
    description: "Perfect for daily wear. Sleek design with premium quality for the modern urban professional.",
    featured: false
  },
  {
    id: 4,
    name: "Alpine Vintage",
    category: "Women",
    price: 169,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&sat=-50",
    description: "Retro-inspired design with contemporary quality. A perfect blend of past and present.",
    featured: false
  },
  {
    id: 5,
    name: "Alpine Explorer",
    category: "Men",
    price: 199,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&sat=50",
    description: "Designed for extreme conditions. These items feature enhanced durability and premium materials.",
    featured: false
  },
  {
    id: 6,
    name: "Alpine Minimal",
    category: "Women",
    price: 119,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&brightness=1.2",
    description: "Less is more. Ultra-lightweight design with crystal-clear quality for everyday elegance.",
    featured: false
  },
  {
    id: 7,
    name: "Alpine Compact",
    category: "Accessories",
    price: 99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&contrast=1.3",
    description: "Compact design for ultimate portability. Never leave home without your Alpine protection.",
    featured: false
  },
  {
    id: 8,
    name: "Alpine Elite",
    category: "Accessories",
    price: 249,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&brightness=0.8",
    description: "The pinnacle of luxury items. Handcrafted with premium materials and exclusive design.",
    featured: true
  }
];

export const categories = ["All", "Men", "Women", "Accessories"];

export const coupons = {
  "WELCOME10": { type: "percentage", value: 10, description: "10% off your first order" },
  "SAVE20": { type: "percentage", value: 20, description: "20% off orders over €200" },
  "FIXED25": { type: "fixed", value: 25, description: "€25 off any order" }
};

