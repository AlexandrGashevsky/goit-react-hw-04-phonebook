import React from 'react';
import contactListStyles from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={contactListStyles.list}>
      {contacts.map(contact => (
        <li className={contactListStyles.item} key={contact.id}>
          <p className={contactListStyles.name}>
            {contact.name}: {contact.number}
          </p>
          {
            <button className={contactListStyles.button} data-key={contact.id} type="button" name="delete" onClick={onDelete}>
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
