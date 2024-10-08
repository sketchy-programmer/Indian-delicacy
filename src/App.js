import './App.css';
import NavigationBar from './components/navigationbar.js';
import HomePageTheme from './components/HomePageTheme.js';
import BookTable from './components/BookTable.js';
import FoodCategory from './components/FoodCategory.js';
import CustomerProtection from './components/CustomerProtection.js'
import RestaurentStory from './components/RestaurentStory.js';
import IngredientsSection from './components/Ingredients.js';
import WordsFromChef from './components/Chef.js';

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
    </div>
    </>
  );
}

export default App;
