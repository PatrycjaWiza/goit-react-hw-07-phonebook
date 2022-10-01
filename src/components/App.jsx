import { useEffect, useState } from 'react';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { Title } from './Styles';
import { PhoneBookForm } from './PhonebookForm';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsStored = localStorage.getItem('contacts');
    const storageContacts = JSON.parse(contactsStored);
    storageContacts !== []
      ? setContacts(storageContacts)
      : setContacts([
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]);
  }, []);

  useEffect(() => {
    console.count(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const filterByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactSubmit = values => {
    const nameArray = contacts.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return setContacts([values, ...contacts]);
  };

  const toDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneBookForm onSubmit={contactSubmit} />
      <Title>Contacts</Title>
      <Filter value={filter} filterByName={handleChange} />
      <Contacts filterByName={filterByName} toDelete={toDelete} />
    </div>
  );
};
