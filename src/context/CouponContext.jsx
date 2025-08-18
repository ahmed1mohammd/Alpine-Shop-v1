import React, { createContext, useContext, useState } from 'react';
import { coupons } from '../data/products';

// Create coupon context
const CouponContext = createContext();

// Coupon provider component
export const CouponProvider = ({ children }) => {
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  // Apply coupon function
  const applyCoupon = (couponCode, cartTotal) => {
    setCouponError('');
    
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return false;
    }

    const coupon = coupons[couponCode.toUpperCase()];
    
    if (!coupon) {
      setCouponError('Invalid coupon code');
      return false;
    }

    // Check minimum order requirement for SAVE20
    if (couponCode.toUpperCase() === 'SAVE20' && cartTotal < 200) {
      setCouponError('This coupon requires a minimum order of €200');
      return false;
    }

    setAppliedCoupon({
      code: couponCode.toUpperCase(),
      ...coupon
    });
    
    return true;
  };

  // Remove coupon function
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  // Calculate discount amount
  const calculateDiscount = (cartTotal) => {
    if (!appliedCoupon) return 0;

    if (appliedCoupon.type === 'percentage') {
      return (cartTotal * appliedCoupon.value) / 100;
    } else if (appliedCoupon.type === 'fixed') {
      return Math.min(appliedCoupon.value, cartTotal);
    }

    return 0;
  };

  // Calculate final total after discount
  const calculateFinalTotal = (cartTotal) => {
    const discount = calculateDiscount(cartTotal);
    return Math.max(0, cartTotal - discount);
  };

  // Get available coupons for display
  const getAvailableCoupons = () => {
    return Object.entries(coupons).map(([code, coupon]) => ({
      code,
      ...coupon
    }));
  };

  const value = {
    appliedCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    calculateDiscount,
    calculateFinalTotal,
    getAvailableCoupons
  };

  return (
    <CouponContext.Provider value={value}>
      {children}
    </CouponContext.Provider>
  );
};

// Custom hook to use coupon context
export const useCoupon = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error('useCoupon must be used within a CouponProvider');
  }
  return context;
};

