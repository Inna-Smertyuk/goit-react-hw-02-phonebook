import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <p className={s.text}>
            {contact.name}: {contact.number}
          </p>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={s.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
