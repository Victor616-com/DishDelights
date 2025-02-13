import styles from '../styling/About.module.css'

const About = () => {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutText}>
                <div className={styles.textBlock}>
                    <h2>About DishDelights</h2>
                    <p>Welcome to DishDelights, your go-to destination for discovering and creating delicious meals! Our mission is to unite food lovers from around the globe by offering a diverse collection of recipes that cater to every taste and dietary preference.</p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Our Purpose</h2>
                    <p>At DishDelights, we believe that cooking should be an enjoyable and accessible experience for everyone. Whether you're a seasoned chef or a beginner in the kitchen, our goal is to provide you with detailed recipe descriptions and step-by-step instructions that make it easy to prepare mouth-watering dishes.</p>
                </div>
                <div className={styles.textBlock}>
                    <h2>What We Offer</h2>
                    <ul>
                        <li><p>Vast Collection of Recipes: Explore a wide range of recipes, from traditional favorites to modern culinary creations. Our collection includes dishes for every occasion and dietary need.</p></li>
                        <li><p>Detailed Recipe Descriptions: Each recipe comes with a comprehensive list of ingredients, precise quantities, and clear instructions to guide you through the cooking process.</p></li>
                        <li><p>Easy-to-Follow Instructions: We break down complex cooking techniques into simple steps, ensuring that you can confidently create delicious meals at home.</p></li>
                        <li><p>Nutritional Information: Stay informed about the nutritional content of each dish, helping you make healthy and informed choices.</p></li>
                        <li><p>Community of Food Lovers: Join a vibrant community of food enthusiasts who share your passion for cooking and discovering new recipes.</p></li>
                    </ul>
                </div>
                <div className={styles.textBlock}>
                    <h2>Our Vision</h2>
                    <p>DishDelights aspires to be more than just a recipe website. We aim to create a thriving community where food lovers can come together to share their culinary experiences, exchange tips, and inspire each other to explore new flavors.</p>
                </div>
            </div>
        </div>
    );
}
 
export default About;