import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import recipes from '../assets/DishDelightsRecipes.json';
import styles from '../styling/RecipeDetails.module.css';
import X from '../components/icons/X';
import ClockIcon from './icons/ClockIcon';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = recipes.recipes[recipeId];
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  return (
    <div className={styles.detailBoxWrapper}>
      <div className={styles.detailBox}>
        <div className={styles.title} style={{ backgroundImage: `url(${recipe.image_url})` }}>
          <Link to={`/DishDelightsRecipes/`}>
            <div className={styles.xBtn}><X /></div>
          </Link>
          <h1>{recipe.title}</h1>
          <div className={styles.tags}>
            <div className={styles.tag}>
              <ClockIcon />
              <p>Total Time - </p>
              {recipe.total_time}
            </div>
            <div className={styles.tag}>
              <ClockIcon />
              <p>Cooking Time - </p>
              {recipe.cooking_time}
            </div>
            <div className={styles.tag}>
              <ClockIcon />
              <p>Preparation Time - </p>
              {recipe.preparation_time}
            </div>
            <div className={styles.tag}>
              {recipe.servings}
              <p> Servings</p>
            </div>
            <div className={styles.tag}>
              {recipe.difficulty_level}
              <p> Difficulty</p>
            </div>
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.nutrBoxNotesWrapper}>
            <div className={styles.nutrBox}>
              <h2>Nutritional Information</h2>
              <br></br>
              <p>Calories - {recipe.nutritional_information.calories}</p>
              <p>Protein - {recipe.nutritional_information.protein}</p>
              <p>Carbohydrates - {recipe.nutritional_information.carbohydrates}</p>
              <p>Fat - {recipe.nutritional_information.fat}</p>
            </div>
            <div className={styles.notes}>
              <h2>Note ❕</h2>
              <p>{recipe.notes}</p>
            </div>
          </div>
          <div className={styles.ingredientsWrapper}>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className={styles.ingredientItem}>
                <label className={styles.customCheckbox}>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={ingredient.item}
                    checked={checkedItems[ingredient.item] || false}
                    onChange={handleChange}
                  />
                  <span className={styles.checkbox}></span>
                </label>
                <label htmlFor={`checkbox-${index}`}>{ingredient.quantity} {ingredient.item}</label>
              </div>
            ))}
          </div>
          
          <div className={styles.instructions}>
            {recipe.instructions.map((instruction, index) => (
                <p key={index}>{index + 1}. {instruction}</p>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeDetails;
