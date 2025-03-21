import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-sm">
              Your one-stop destination for all your shopping needs. Quality products,
              competitive prices, and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">Returns</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">Shipping</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">1234 Shopping Street</li>
              <li className="text-sm">Retail City, RC 12345</li>
              <li className="text-sm">Phone: (123) 456-7890</li>
              <li className="text-sm">Email: support@shophub.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <p className="text-sm">Subscribe to get special offers and updates</p>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img
                src="https://raw.githubusercontent.com/tailwindui/tailwindui-syntax/main/src/img/payment-methods.png"
                alt="Payment methods"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};