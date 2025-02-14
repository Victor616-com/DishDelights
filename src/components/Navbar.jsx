import { useState, useRef, useEffect } from "react";
import MenuIcon from "./icons/MenuIcon";
import styles from '../styling/Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest(`.${styles.menuIcon}`)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.logo}>
                <NavLink exact to="/" >
                    <span>Dish</span>Delights 👨🏻‍🍳
                </NavLink>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <MenuIcon />
            </div>
            <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`} ref={navRef}>
                <div className={styles.navLink}>
                    <NavLink to="/DishDelightsRecipes" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>
                        DishDelights Recipes
                    </NavLink>
                </div>
                <div className={styles.navLink}>
                    <NavLink to="/PersonalFavoriteRecipes" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>
                        Personal favorite recipes
                    </NavLink>
                </div>
                <div className={styles.navLink}>
                    <NavLink to="/About" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>
                        About
                    </NavLink>
                </div>
                <div className={styles.navLink}>
                    <NavLink to="/Contact" onClick={toggleMenu} className={({ isActive }) => isActive ? styles.active : ''}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
