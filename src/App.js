import './App.css';
import NavigationBar from './HomePageComponents/navigationbar.js';
import HomePageTheme from './HomePageComponents/HomePageTheme.js';
import BookTable from './HomePageComponents/BookTable.js';
import FoodCategory from './HomePageComponents/FoodCategory.js';
import CustomerProtection from './HomePageComponents/CustomerProtection.js';
import RestaurentStory from './HomePageComponents/RestaurentStory.js';
import IngredientsSection from './HomePageComponents/Ingredients.js';
import WordsFromChef from './HomePageComponents/Chef.js';
import CustomerReview from './HomePageComponents/CustomerReview.js';
import NewsLetterSubscription from './HomePageComponents/NewsLetterSubscription.js';
import Footer from './HomePageComponents/Footer.js';
import MenuPageTheme from './MenuPageComponents/MenuPageTheme.js';
import Categories from './MenuPageComponents/MenuPageCategories.js';
import MeatDishes from './MenuPageComponents/MeatItems.js';
import AddItem from './AddItem/AddItem.js';
import { SideDishes } from './MenuPageComponents/SideDIshesIndian.js';
import AllItems from './MenuPageComponents/AllItems.js';
import IndianFastFood from './MenuPageComponents/indian_FastFood.js';
import Drinks from './MenuPageComponents/Drinks.js';
import Cart from './Cart/Cart.js';
import { Routes, Route } from 'react-router-dom';
import SignUp  from './SignIn/SignUp.js';
import { CartProvider } from './Cart/CartContext.js'; // Import the CartProvider
import SelectTable from './HomePageComponents/SelectTable.js';
import LoginPage from './SignIn/LoginPage.js';
import NavigationBarUser from './HomePageComponents/navigationbaruser.js';
function App() {
  return (
    <>
      <CartProvider> {/* Wrap everything with CartProvider */}
        <div>
          <Routes>
            <Route path='/cart' element={<><NavigationBar /><Cart /></>} />
            <Route path="/User" element={<><NavigationBarUser /><HomePageTheme /><BookTable /><FoodCategory /><CustomerProtection />
              <RestaurentStory /><IngredientsSection /><WordsFromChef /><CustomerReview /><NewsLetterSubscription /></>} />
            <Route path="/Admin" element={<><NavigationBar /><HomePageTheme /><BookTable /><FoodCategory /><CustomerProtection />
              <RestaurentStory /><IngredientsSection /><WordsFromChef /><CustomerReview /><NewsLetterSubscription /></>} />
            <Route path="/select-table" element={<><NavigationBar /><SelectTable /></>} />
            <Route path="/menu" element={<><NavigationBar /><MenuPageTheme /><Categories /><AllItems/></>} />
            <Route path="/cuisins" element={<><NavigationBar /><Categories /><MeatDishes /></>} />
            <Route path="/SideDishes" element={<><NavigationBar /><Categories /><SideDishes /></>}></Route>
            <Route path="/Indian_FastFood" element={<><NavigationBar /><Categories /><IndianFastFood /></>}></Route>
            <Route path="/Drinks" element={<><NavigationBar /><Categories /><Drinks /></>}></Route>
            <Route path="/SignUp" element={<><NavigationBar /><SignUp /></>} />
            <Route path="/login" element={<><NavigationBar /><LoginPage /></>}/>
            <Route path="/add-item" element={<><NavigationBar /><AddItem /></>} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
