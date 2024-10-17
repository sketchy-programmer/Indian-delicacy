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
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<>
            <HomePageTheme />
            <BookTable />
            <FoodCategory />
            <CustomerProtection />
            <RestaurentStory />
            <IngredientsSection />
            <WordsFromChef />
            <CustomerReview />
            <NewsLetterSubscription />
            <Footer />
          </>} />
          <Route path="/menu" element={<>
            <MenuPageTheme />
            <Footer />
           </> } />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
