import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import appStyles from "./App.module.css";

export default function App() {
  const saved = localStorage.getItem('contacts');
  let initialValue = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  if (saved) {
    initialValue = JSON.parse(saved);
  }
  const [contacts, setContacts] = useState(initialValue);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactSubmit = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const onDeleteContact = e => {
    const id = e.target.getAttribute('data-key');

    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h1 className={appStyles.header}>Phonebook</h1>
      <ContactForm addContact={addContactSubmit} />
      <h2 className={appStyles.title}>Contacts</h2>
      <Filter value={filter} handleChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
    </div>
  );
}
