import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LikeButton } from './LikeButton';

const clothes = [
  {
    id: '1',
    name: 'Boys Loose Fit Hoodie',
    price: 1990,
    originalPrice: 2599,
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2F22%2F4022f77fed1caf41ff006e55af3413cd7a272263.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '2',
    name: 'Loose Fit Teddy jacket',
    price: 899,
    originalPrice: 999,
    image: 'https://image.hm.com/assets/hm/1b/63/1b63cea6c72de7eb06f5a7a619670222be147103.jpg?imwidth=564',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '3',
    name: 'Handmade wool-blend shacket',
    price: 12999,
    originalPrice: 15999,
    image: 'https://image.hm.com/assets/hm/c7/52/c752dea90749bd95d4843e656224788b07ca8553.jpg?imwidth=564',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '4',
    name: 'Sports sweatshirt in DryMove™',
    price: 2299,
    originalPrice: 2999,
    image: 'https://image.hm.com/assets/hm/4e/7c/4e7c5eeb0e1b67df69ee129af068e6cf88753d60.jpg?imwidth=564',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '5',
    name: 'Printed Blended Fabric Regular Fit Boys Sweatshirt',
    price: 1137,
    originalPrice: 1895,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '6',
    name: 'Cotton Blend Round Neck Boys Sweatshirt',
    price: 597,
    originalPrice: 995,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '7',
    name: 'Blended Fabric Regular Fit Boys Jacket',
    price: 1407,
    originalPrice: 2345,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    category: 'Jackets',
    offers: 2
  },
  {
    id: '8',
    name: 'Cotton Blend Regular Fit Boys Sweatshirt',
    price: 990,
    originalPrice: 1650,
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '9',
    name: 'Cotton Blend Regular Fit Boys Sweatshirt',
    price: 990,
    originalPrice: 1650,
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a',
    category: 'Sweatshirts',
    offers: 2
  },
  {
    id: '10',
    name: 'Cotton Blend Regular Fit Boys Sweatshirt',
    price: 990,
    originalPrice: 1650,
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a',
    category: 'Sweatshirts',
    offers: 2
  },
];

export const ClothesSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;

  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + itemsToShow >= clothes.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      prev === 0 ? clothes.length - itemsToShow : prev - 1
    );
  };

  const visibleClothes = clothes.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Trending Now
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out space-x-4"
          style={{
            transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {clothes.map((item) => (
            <div
              key={item.id}
              className="relative flex-none w-full sm:w-1/2 lg:w-1/4 group"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <LikeButton productId={item.id} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-white line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-300">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">₹{item.price}</span>
                      <span className="text-gray-400 line-through text-sm">
                        ₹{item.originalPrice}
                      </span>
                      <span className="text-green-400 text-sm">
                        {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xs text-white/75">
                        {item.offers} OFFERS FOR YOU
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};