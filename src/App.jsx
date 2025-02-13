import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DishDelightsRecipes from './components/DishDelightsRecipes';
import RecipeDetails from './components/RecipeDetails';
import PersonalFavoriteRecipes from './components/PersonalFavoriteRecipes';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [personalRecipes, setPersonalRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('personalRecipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  useEffect(() => {
    localStorage.setItem('personalRecipes', JSON.stringify(personalRecipes));
  }, [personalRecipes]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/DishDelights" element={<Home />} />
            <Route exact path="/DishDelightsRecipes" element={<DishDelightsRecipes />} />
            <Route exact path="/DishDelightsRecipes/:recipeId" element={<RecipeDetails />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route
              exact
              path="/PersonalFavoriteRecipes"
              element={
                <PersonalFavoriteRecipes
                  personalRecipes={personalRecipes}
                  setPersonalRecipes={setPersonalRecipes}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
