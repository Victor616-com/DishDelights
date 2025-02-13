import { Link } from 'react-router-dom';
import styles from '../styling/RecipeBox.module.css'
import PurpleBtn from './buttons/PurpleBtn'
import ClockIcon from './icons/ClockIcon'

const RecipeBox = ({ recipe, index }) => {
    return (
        <Link to={`/DishDelightsRecipes/${index}`} className={styles.boxLink}>

            <div className={styles.box} style={{ backgroundImage: `url(${recipe.image_url})`}} >
                <h2>{recipe.title}</h2>
                <div className={styles.paragraphs}>
                    <div className={styles.tag}>
                        <ClockIcon />
                        {recipe.total_time}
                    </div>
                    <div className={styles.tag}>
                        {recipe.servings} servings
                    </div>
                    <div className={styles.tag}>
                        Difficulty - {recipe.difficulty_level}
                    </div>
                </div>
                
            </div>
        </Link>
        
    );
}
 
export default RecipeBox;