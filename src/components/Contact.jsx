import styles from '../styling/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contactWrapper}>
            <div className={styles.contactText}>
                <div className={styles.textBlock}>
                    <h2>Contact Us</h2>
                    <p>We would love to hear from you! Whether you have questions, feedback, or suggestions, our team at DishDelights is here to assist you. Please don't hesitate to get in touch with us using any of the following methods.</p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Headquarters Address</h2>
                    <p>DishDelights 456 Culinary Avenue Gourmet Town, 1010 Vienna, Austria</p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Email</h2>
                    <p>For general inquiries, please email us at: info@dishdelights.com</p>
                    <p>For support and assistance, please email us at: support@dishdelights.com</p>
                </div>
                <div className={styles.textBlock}>
                    <h2>Phone</h2>
                    <p>You can reach our customer service team at: +43 1 234 5678</p>
                    <p>Our phone lines are open Monday to Friday, from 9:00 AM to 6:00 PM (CET).</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;