import styles from '../../styling/Btn.module.css'

const PurpleBtn = ({ children }) => {
    return (
        <button className={styles.btnPurple}>{children}</button>
    );
}
 
export default PurpleBtn;