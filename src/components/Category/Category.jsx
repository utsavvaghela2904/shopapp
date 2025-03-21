import React, { useState } from 'react';
import { LikeButton } from '../LikeButton';

const categories = [
  {
    id: '1',
    name: 'womens shirt',
    description: 'Tie-detail wrap shirt',
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1e%2F5f%2F1e5f3842d39aa417b2aae9aacd5bd69c6e982af0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
    price: 1137,
    originalPrice: 1895
  },
  {
    id: '2',
    name: 'Nature',
    description: 'Explore the wilderness',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1',
    price: 597,
    originalPrice: 995
  },
  {
    id: '3',
    name: 'Adventure',
    description: 'Off-road experiences',
    image: 'https://images.unsplash.com/photo-1533052494972-63e07f31e2a1',
    price: 1407,
    originalPrice: 2345
  },
  {
    id: '4',
    name: 'Roads',
    description: 'Scenic routes and highways',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    price: 990,
    originalPrice: 1650
  },
  {
    id: '5',
    name: 'Interior Design',
    description: 'Modern home decor',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    price: 1200,
    originalPrice: 2000
  },
  {
    id: '6',
    name: 'Autumn',
    description: 'Fall season beauty',
    image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
    price: 800,
    originalPrice: 1200
  },
  {
    id: '7',
    name: 'Productivity',
    description: 'Time management tools',
    image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907',
    price: 350,
    originalPrice: 500
  },
  {
    id: '8',
    name: 'Creativity',
    description: 'Artistic inspiration',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634',
    price: 450,
    originalPrice: 700
  },
  {
    id: '9',
    name: 'Urban Living',
    description: 'Modern city lifestyle essentials',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e',
    price: 1599,
    originalPrice: 2499
  },
  
  
];

export const Category = () => {
  const [sortBy, setSortBy] = useState('name');
  const [filter, setFilter] = useState('');

  const filteredCategories = categories
    .filter(category =>
      category.name.toLowerCase().includes(filter.toLowerCase()) ||
      category.description.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Explore Categories
        </h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Filter categories..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="name">Sort by name</option>
            <option value="popular">Sort by popularity</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        {filteredCategories.map((category, index) => (
          <div
            key={category.id}
            className={`group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1 ${
              index === 4 || index === 5 || index === 1 ? 'row-span-2' : ''
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm mb-2">{category.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">₹{category.price}</span>
                    <span className="text-gray-400 line-through text-sm">₹{category.originalPrice}</span>
                    <span className="text-green-400 text-sm">
                      {Math.round((1 - category.price / category.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <LikeButton productId={category.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

