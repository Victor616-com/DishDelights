import styles from '../styling/DishDelightsRecipes.module.css'
import recipes from '../assets/DishDelightsRecipes.json'
import RecipeBox from './RecipeBox';
const DishDelightsRecipes = () => {
    return (
        <div className={styles.DDrecepies}>
            <div className={styles.DDrecepiesWrapper}>
                {recipes.recipes.map((recipe, index) => (
                    <RecipeBox key={ index } recipe={recipe} index={index}></RecipeBox>
                ))}
            </div>
            
        </div>
    );
}
 
export default DishDelightsRecipes;