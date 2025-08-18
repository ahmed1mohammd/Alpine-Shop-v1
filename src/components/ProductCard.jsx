import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, getCartItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    setIsAdded(true);
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const cartItem = getCartItem(product.id);
  const isInCart = !!cartItem;

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ${
            isHovered ? 'bg-opacity-10' : ''
          }`} />
          
          {/* Add to Cart Button - appears on hover */}
          <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                isAdded 
                  ? 'bg-green-600 text-white' 
                  : isInCart
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
              disabled={isAdded}
            >
              <div className="flex items-center justify-center space-x-2">
                {isAdded ? (
                  <>
                    <Check size={16} />
                    <span>Added!</span>
                  </>
                ) : isInCart ? (
                  <>
                    <ShoppingCart size={16} />
                    <span>Add More</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            {product.category}
          </p>
          
          {/* Product Name */}
          <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          
          {/* Price */}
          <p className="text-xl font-semibold text-gray-900">
            €{product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

