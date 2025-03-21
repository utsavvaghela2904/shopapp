import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { CategorySection } from './components/CategorySection';
import { ClothesSlider } from './components/ClothesSlider';
import { FeaturedCollection } from './components/FeaturedCollection';
import { Cart } from './components/Cart';
import { CartSlider } from './components/CartSlider';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Category } from './components/Category/Category';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
            <Navbar onCartClick={() => setIsCartOpen(true)} />
            <main>
              <HeroSlider />
              <ClothesSlider />
              <CategorySection />
              <FeaturedCollection />
              <Category/>
              <Cart />
            </main>
            <Footer />
            <CartSlider 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />
          </div>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;