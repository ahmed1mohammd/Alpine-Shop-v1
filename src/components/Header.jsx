import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const location = useLocation();
  const cartItemsCount = getCartItemsCount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Menu Icon (Mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation (Left) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.filter(cat => cat !== 'All').map((category) => (
              <Link
                key={category}
                to={`/?category=${category.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <div className="flex-1 flex justify-center lg:flex-none">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-wider">
              ALPINE
            </Link>
          </div>

          {/* Right Side - Language & Cart */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span>EN</span>
                <ChevronDown size={16} className={`transform transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">EN</button>
                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">FR</button>
                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">DE</button>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="py-4 space-y-2">
              {categories.filter(cat => cat !== 'All').map((category) => (
                <Link
                  key={category}
                  to={`/?category=${category.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

