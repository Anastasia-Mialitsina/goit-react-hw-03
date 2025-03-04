import { FaUser, FaPhone, FaTrash } from "react-icons/fa";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
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
          <button onClick={() => onDelete(id)} className={styles.deleteButton}>Delete
            <FaTrash/>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
