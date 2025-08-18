// Sample product data for the Alpine sunglasses e-commerce store with diverse images
export const products = [
  {
    id: 1,
    name: "Alpine Classic",
    category: "Fashion",
    price: 149,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    description: "Timeless design meets modern functionality. The Alpine Classic features premium polarized lenses and a lightweight titanium frame.",
    featured: true
  },
  {
    id: 2,
    name: "Alpine Sport",
    category: "Travel",
    price: 189,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    description: "Built for adventure. These sport sunglasses offer superior grip and impact resistance for active lifestyles.",
    featured: false
  },
  {
    id: 3,
    name: "Alpine Urban",
    category: "Every day",
    price: 129,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop",
    description: "Perfect for daily wear. Sleek design with UV protection for the modern urban professional.",
    featured: false
  },
  {
    id: 4,
    name: "Alpine Vintage",
    category: "Fashion",
    price: 169,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&sat=-50",
    description: "Retro-inspired frames with contemporary lens technology. A perfect blend of past and present.",
    featured: true
  },
  {
    id: 5,
    name: "Alpine Explorer",
    category: "Travel",
    price: 199,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&sat=50",
    description: "Designed for extreme conditions. These sunglasses feature anti-fog coating and enhanced durability.",
    featured: false
  },
  {
    id: 6,
    name: "Alpine Minimal",
    category: "Every day",
    price: 119,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&brightness=1.2",
    description: "Less is more. Ultra-lightweight design with crystal-clear optics for everyday elegance.",
    featured: false
  },
  {
    id: 7,
    name: "Alpine Compact",
    category: "Miniatures",
    price: 99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&contrast=1.3",
    description: "Foldable design for ultimate portability. Never leave home without your Alpine protection.",
    featured: false
  },
  {
    id: 8,
    name: "Alpine Elite",
    category: "Fashion",
    price: 249,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&brightness=0.8",
    description: "The pinnacle of luxury eyewear. Handcrafted frames with premium materials and exclusive design.",
    featured: true
  },
  {
    id: 9,
    name: "Alpine Premium",
    category: "Fashion",
    price: 299,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&blur=2",
    description: "Ultra-premium collection featuring handcrafted frames with precious metals and exclusive lens technology.",
    featured: true
  },
  {
    id: 10,
    name: "Alpine Adventure",
    category: "Travel",
    price: 179,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&hue=30",
    description: "Perfect for outdoor adventures with enhanced durability and weather resistance.",
    featured: false
  },
  {
    id: 11,
    name: "Alpine Business",
    category: "Every day",
    price: 159,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&saturation=1.5",
    description: "Professional eyewear designed for the modern business environment with sophisticated styling.",
    featured: false
  },
  {
    id: 12,
    name: "Alpine Retro",
    category: "Fashion",
    price: 139,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&sepia=50",
    description: "Vintage-inspired design with modern comfort and contemporary lens technology.",
    featured: false
  }
];

export const categories = ["All", "Fashion", "Travel", "Every day", "Miniatures"];

export const coupons = {
  "WELCOME10": { type: "percentage", value: 10, description: "10% off your first order" },
  "SAVE20": { type: "percentage", value: 20, description: "20% off orders over €200" },
  "FIXED25": { type: "fixed", value: 25, description: "€25 off any order" }
};
