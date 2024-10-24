import './App.css';
import NavigationBar from './HomePageComponents/navigationbar.js';
import HomePageTheme from './HomePageComponents/HomePageTheme.js';
import BookTable from './HomePageComponents/BookTable.js';
import FoodCategory from './HomePageComponents/FoodCategory.js';
import CustomerProtection from './HomePageComponents/CustomerProtection.js'
import RestaurentStory from './HomePageComponents/RestaurentStory.js';
import IngredientsSection from './HomePageComponents/Ingredients.js';
import WordsFromChef from './HomePageComponents/Chef.js';
import CustomerReview from './HomePageComponents/CustomerReview.js';
import NewsLetterSubscription from './HomePageComponents/NewsLetterSubscription.js';
import Footer from './HomePageComponents/Footer.js';
import MenuPageTheme from './MenuPageComponents/MenuPageTheme.js';
import Categories from './MenuPageComponents/MenuPageCategories.js';
import MeatDishes from './MenuPageComponents/MeatItems.js'; // Updated import
import AddItem from './AddItem/AddItem.js';
import Cart from './Cart/Cart.js';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Cart/CartContext.js'; // Import the CartProvider

function App() {
  return (
    <>
      <CartProvider> {/* Wrap everything with CartProvider */}
        <div>
          <NavigationBar />
          <Routes>
            <Route path='/cart' element={<><Cart /><Footer /></>} />
            <Route path="/" element={<><HomePageTheme /><BookTable /><FoodCategory /><CustomerProtection />
              <RestaurentStory /><IngredientsSection /><WordsFromChef /><CustomerReview /><NewsLetterSubscription /><Footer /></>} />
            <Route path="/menu" element={<><MenuPageTheme /><Categories /><Footer /></>} />
            <Route path="/cuisins" element={<><Categories /><MeatDishes /><Footer /></>} />
            <Route path="/Add_item" element={<><AddItem /><Footer /></>} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
