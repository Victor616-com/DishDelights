import { useState } from 'react';
import styles from '../styling/DishDelightsRecipes.module.css';
import recipes from '../assets/DishDelightsRecipes.json';
import RecipeBox from './RecipeBox';

const DishDelightsRecipes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipes.recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.DDrecepies}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.DDrecepiesWrapper}>
        {filteredRecipes.map((recipe, index) => (
          <RecipeBox key={index} recipe={recipe} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DishDelightsRecipes;
