import PropTypes from "prop-types";
import { FaUser, FaPhone, FaTrash } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
    return (
        <li key={id} className={styles.item}>
            <div className={styles.contactDetails}>
                <div className={styles.contactInfo}>
                    <FaUser />
                    <span className={styles.name}>{name}</span>
                </div>
                <div className={styles.contactInfo}>
                    <FaPhone />
                    <span className={styles.number}>{number}</span>
                </div>
            </div>
            <button onClick={() => onDelete(id)} className={styles.deleteButton}>
                Delete
                <FaTrash />
            </button>
        </li>
    );
};

Contact.PropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default Contact;