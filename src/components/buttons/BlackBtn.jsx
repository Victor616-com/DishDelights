import styles from '../../styling/Btn.module.css'

const BlackBtn = ({ children }) => {
    return (
        <button className={styles.btnBlack}>{children}</button>
    );
}
 
export default BlackBtn;