import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DishDelightsRecipes from './components/DishDelightsRecipes'
import RecipeDetails from './components/RecipeDetails'

function App() {
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
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
