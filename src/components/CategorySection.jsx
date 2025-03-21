import React, { useState } from 'react';

const categories = [
  {
    id: '1',
    name: 'Electronics',
    description: 'Latest gadgets and devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
  },
  {
    id: '2',
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
  },
  {
    id: '3',
    name: 'Home & Living',
    description: 'Furniture and home decor',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a',
  },
  {
    id: '4',
    name: 'Sports',
    description: 'Sports equipment and accessories',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
  },
];

export const CategorySection = () => {
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
          Shop by Category
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-white/90 text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};