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
import Cart from './Cart/Cart.js';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignIn/SignUp.js';
import LoginPage from './SignIn/LoginPage.js';
import { CartProvider } from './Cart/CartContext.js';
import React, { useState } from "react";


function App() {
  return (
    <CartProvider>
      <div>
        <NavigationBar />
        <Routes>
          {/* Home Route with all components */}
          <Route path="/" element={
            <>
              <HomePageTheme />
              <BookTable />
              <FoodCategory />
              <CustomerProtection />
              <RestaurentStory />
              <IngredientsSection />
              <WordsFromChef />
              <CustomerReview />
              <NewsLetterSubscription />
            </>
          } />
          
          {/* Menu Route */}
          <Route path="/menu" element={
            <>
              <MenuPageTheme />
              <Categories />
            </>
          } />
          
          {/* Cuisine Route */}
          <Route path="/cuisins" element={
            <>
              <Categories />
              <MeatDishes />
            </>
          } />
          
          {/* Cart Route */}
          <Route path="/cart" element={<Cart />} />
          
          {/* SignUp and Login Routes */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
        
          
          {/* Add Item Route */}
          <Route path="/Add_item" element={<AddItem />} />
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
