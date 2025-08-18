import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, getCartItem, updateQuantity } = useCart();

  // Find the product
  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  // Get related products (same category, excluding current product)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  const cartItem = getCartItem(product?.id);
  const currentCartQuantity = cartItem?.quantity || 0;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add the specified quantity to cart
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Category */}
            <p className="text-sm uppercase tracking-wider text-gray-500">
              / {product.category}
            </p>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-3xl font-semibold text-gray-900">
              €{product.price}
            </p>

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-900">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              {currentCartQuantity > 0 && (
                <p className="text-sm text-gray-500">
                  {currentCartQuantity} already in cart
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-200 ${
                  isAdded
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                disabled={isAdded}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isAdded ? (
                    <>
                      <Check size={20} />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </div>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3 px-6 rounded-md font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium polarized lenses</li>
                <li>• UV400 protection</li>
                <li>• Lightweight titanium frame</li>
                <li>• Anti-reflective coating</li>
                <li>• Scratch-resistant surface</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                You Might Also Like
              </h2>
              <p className="text-gray-600">
                Discover more products from the {product.category} collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;

