import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
    category: 'IN FOCUS',
    title: 'Stripes',
    description: 'Discover our new collection of striped patterns',
    price: 'Rs.1,499.00',
    link: 'Shop now'
  },
  {
    id: 2,
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0f%2Fea%2F0fea5fb8d095ddc0c983a6f3f9ba5ac34b98ea0b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    category: 'NEW IN',
    title: 'Textured-weave overshirt',
    description: 'Timeless black & white pieces',
    price: 'Rs.2,499.00',
    link: 'View collection'
  }
];

export const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <div 
            key={collection.id}
            className="group relative overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-30" />
            </div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="inline-block text-white text-sm tracking-wider mb-2">
                  {collection.category}
                </span>
                <h2 className="text-white text-4xl font-light mb-4">
                  {collection.title}
                </h2>
                <p className="text-white/90 mb-6 max-w-md">
                  {collection.description}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">
                    {collection.price}
                  </span>
                  <button className="group/btn inline-flex items-center text-white">
                    <span className="border-b border-transparent transition-colors group-hover/btn:border-white">
                      {collection.link}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};