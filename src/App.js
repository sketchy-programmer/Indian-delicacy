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
import SignUp from './SignIn/SignUp.js';
import LoginPage from './SignIn/LoginPage.js';
import { CartProvider } from './Cart/CartContext.js';
import React from "react";


function App() {
  return (
    <>
      <CartProvider> {/* Wrap everything with CartProvider */}
        <div>
          <NavigationBar />
          <Routes>
            <Route path='/cart' element={<><Cart /></>} />
            <Route path="/" element={<><HomePageTheme /><BookTable /><FoodCategory /><CustomerProtection />
              <RestaurentStory /><IngredientsSection /><WordsFromChef /><CustomerReview /><NewsLetterSubscription /></>} />
            <Route path="/menu" element={<><MenuPageTheme /><Categories /><AllItems/><RestaurentStory/></>} />
            <Route path="/cuisins" element={<><Categories /><MeatDishes /></>} />
            <Route path="/SideDishes" element={<><Categories /><SideDishes /></>}></Route>
            <Route path="/Indian_FastFood" element={<><Categories /><IndianFastFood /></>}></Route>
            <Route path="/Drinks" element={<><Categories /><Drinks /></>}></Route>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/Add_item" element={<><AddItem /></>} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
