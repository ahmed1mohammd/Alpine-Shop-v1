import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const { addItem } = useCart();

  // Get featured products
  const featuredProducts = products.filter(product => product.featured);
  const currentFeaturedProduct = featuredProducts[currentFeaturedIndex];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Handle category change from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const formattedCategory = categoryParam.replace('-', ' ');
      const validCategory = products.find(p => p.category.toLowerCase() === formattedCategory);
      if (validCategory) {
        setSelectedCategory(validCategory.category);
      }
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: category.toLowerCase().replace(' ', '-') });
    }
  };

  const handlePrevFeatured = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  const handleNextFeatured = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const handleBuyNow = () => {
    addItem(currentFeaturedProduct);
    // Could redirect to cart or show a notification
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Details */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {/* Category */}
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  / {currentFeaturedProduct?.category}
                </p>
                
                {/* Product Name */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {currentFeaturedProduct?.name}
                </h1>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  {currentFeaturedProduct?.description}
                </p>
                
                {/* Buy Button */}
                <button
                  onClick={handleBuyNow}
                  className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Buy €{currentFeaturedProduct?.price}
                </button>
                
                {/* Pagination */}
                <div className="flex items-center space-x-4 pt-4">
                  <button
                    onClick={handlePrevFeatured}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                    aria-label="Previous product"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <span className="text-sm font-medium text-gray-900">
                    {String(currentFeaturedIndex + 1).padStart(2, '0')} / {String(featuredProducts.length).padStart(2, '0')}
                  </span>
                  
                  <button
                    onClick={handleNextFeatured}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                    aria-label="Next product"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Side - Product Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={currentFeaturedProduct?.image}
                    alt={currentFeaturedProduct?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Product Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium sunglasses designed for every lifestyle and occasion.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

