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
import Footer from './HomePageComponents/Footer.js';

function App() {
  return (
    <>
    <div>
      <NavigationBar />
      <HomePageTheme />
      <BookTable /> 
      <FoodCategory />
      <CustomerProtection />
      <RestaurentStory />
      <IngredientsSection />
      <WordsFromChef />
      <CustomerReview />
      <Footer />
    </div>
    </>
  );
}

export default App;
