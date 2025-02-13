import { useState } from 'react';
import styles from '../styling/PersonalRecipeBox.module.css';
import BlackBtn from './buttons/BlackBtn';
import Delete from './icons/Delete';

const PersonalRecipeBox = ({ recipe, updateRecipe, deleteRecipe, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  const handleSave = () => {
    updateRecipe(index, editedRecipe);
    setIsEditing(false);
  };

  const handleDelete = () => {
    handleSave();
    deleteRecipe(index);
  };

  return (
    <div className={styles.personalRecipeBox}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedRecipe.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cookingTime"
            value={editedRecipe.cookingTime}
            onChange={handleChange}
          />
          <input
            type="text"
            name="servings"
            value={editedRecipe.servings}
            onChange={handleChange}
          />
          <textarea
            name="ingredients"
            value={editedRecipe.ingredients.join(', ')}
            onChange={(e) => setEditedRecipe({ ...editedRecipe, ingredients: e.target.value.split(',').map(item => item.trim()) })}
          />
          <textarea
            name="steps"
            value={editedRecipe.steps.join('. ')}
            onChange={(e) => setEditedRecipe({ ...editedRecipe, steps: e.target.value.split('.').map(item => item.trim()) })}
          />
          <textarea
            name="notes"
            value={editedRecipe.notes}
            onChange={handleChange}
          />
          <div className={styles.editBtnWrapper}>
            <button onClick={handleSave}><BlackBtn>Save</BlackBtn></button>
            <button onClick={handleDelete} className={styles.deleteBtn}><Delete /></button>
          </div>
        </>
      ) : (
        <div onClick={handleEditToggle}>
          <h2>{recipe.title}</h2>
          <p>Cooking time - {recipe.cookingTime}</p>
          <p>{recipe.servings} servings</p>
          <br />
          <p>Ingredients</p>
          {recipe.ingredients.map((ingredient, index) => (
            <p key={index}>{index + 1}. {ingredient}</p>
          ))}
          <br />
          <p>Steps</p>
          {recipe.steps.map((step, index) => (
            <p key={index}>{index + 1}. {step}</p>
          ))}
          <br />
          <p>Notes</p>
          <p>{recipe.notes}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalRecipeBox;
