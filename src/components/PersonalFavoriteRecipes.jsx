import { useState } from 'react';
import styles from '../styling/PersonalFavoriteRecipes.module.css';
import PersonalRecipeBox from './PersonalRecipeBox';
import PurpleBtn from './buttons/PurpleBtn';

const PersonalFavoriteRecipes = ({ personalRecipes, setPersonalRecipes }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: '',
    cookingTime: '',
    servings: '',
    steps: '',
    notes: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleAddRecipe = (event) => {
    event.preventDefault();
    setPersonalRecipes([
      ...personalRecipes,
      {
        ...newRecipe,
        ingredients: newRecipe.ingredients.split(',').map(item => item.trim()),
        steps: newRecipe.steps.split('.').map(item => item.trim())
      }
    ]);
    setNewRecipe({
      title: '',
      ingredients: '',
      cookingTime: '',
      servings: '',
      steps: '',
      notes: ''
    });
  };

  const updateRecipe = (index, updatedRecipe) => {
    const updatedRecipes = personalRecipes.map((recipe, i) =>
      i === index ? updatedRecipe : recipe
    );
    setPersonalRecipes(updatedRecipes);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = personalRecipes.filter((_, i) => i !== index);
    setPersonalRecipes(updatedRecipes);
  };
  return (
    <div className={styles.recipiesWrapper}>
      <div className={styles.recipeFormWrapper}>
        <h2>Add a Personal Recipe</h2>
        <form onSubmit={handleAddRecipe} className={styles.recipeForm}>
          <input
            type="text"
            name="title"
            value={newRecipe.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (separated by commas)"
            required
          />
          <input
            type="text"
            name="cookingTime"
            value={newRecipe.cookingTime}
            onChange={handleChange}
            placeholder="Cooking Time"
            required
          />
          <input
            type="text"
            name="servings"
            value={newRecipe.servings}
            onChange={handleChange}
            placeholder="Servings"
            required
          />
          <textarea
            name="steps"
            value={newRecipe.steps}
            onChange={handleChange}
            placeholder="Steps (separated by periods)"
            required
            className={styles.customTextarea}
          ></textarea>
          <textarea
            name="notes"
            value={newRecipe.notes}
            onChange={handleChange}
            placeholder="Additional Notes or Tips"
            className={styles.customTextarea}
          ></textarea>
          <PurpleBtn type="submit">Add Recipe</PurpleBtn>
        </form>
      </div>

      <div className={styles.recipeBoxes}>
        {personalRecipes.map((recipe, index) => (
          <PersonalRecipeBox key={index} recipe={recipe} index={index} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}  />
        ))}
      </div>
    </div>
  );
};

export default PersonalFavoriteRecipes;
