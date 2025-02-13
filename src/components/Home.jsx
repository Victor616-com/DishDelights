import styles from '../styling/Home.module.css';
import foodImg from '../assets/images/burger2.png'
import PurpleBtn from './buttons/PurpleBtn';
import BlackBtn from './buttons/BlackBtn';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.hero}>
                <div className={styles.heroHeading}>
                    <h2>Welcome to DishDelight! 👋🏻</h2>
                </div>
                
                <div className={styles.heroText}>
                        <p>The ultimate hub for culinary enthusiasts! Whether you're a seasoned chef or an amateur cook, our extensive collection of recipes has something to tantalize every palate.</p>
                        <p>Discover new dishes, master your favorite recipes, and join a vibrant community of food lovers from around the globe.</p>

                    </div>
                <div className={styles.btnWrapper}>
                    <Link to="/PersonalFavoriteRecipes"><PurpleBtn >See your recepies</PurpleBtn></Link>
                    <Link to="/DishDelightsRecipes"><BlackBtn>See our recepies</BlackBtn></Link>
                </div>
                
            </div>

        </div>
    );
}
 
export default Home;