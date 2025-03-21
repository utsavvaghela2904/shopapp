import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export const LikeButton = ({ productId }) => {
  const { state: { items }, dispatch } = useWishlist();
  const isLiked = items.includes(productId);

  const toggleLike = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: productId });
  };

  return (
    <button
      onClick={toggleLike}
      className={`p-2 rounded-full transition-colors ${
        isLiked 
          ? 'bg-red-50 dark:bg-red-900/20' 
          : 'bg-gray-100 dark:bg-gray-800'
      }`}
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          isLiked
            ? 'text-red-500 fill-red-500'
            : 'text-gray-400 dark:text-gray-500'
        }`}
      />
    </button>
  );
};