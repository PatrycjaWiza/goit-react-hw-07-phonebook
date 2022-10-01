import { useEffect } from 'react';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { Title } from './Styles';
import { PhoneBookForm } from './PhonebookForm';
import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from 'data/actions';

export const App = () => {
  const contactState = useSelector(state => state.contacts.items);
  const contactFilter = useSelector(state => state.contacts.filter);
  useSelector(state => console.log(contactState));
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsStored = localStorage.getItem('contacts');
    const storageContacts = JSON.parse(contactsStored);
    dispatch(contactActions.addContact(storageContacts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactState));
  }, [contactState]);

  const handleChange = e => {
    dispatch(contactActions.addFilter(e.target.value));
  };

  const filterByName = () => {
    return contactState.filter(contact => {
      return contact.name.toLowerCase().includes(contactFilter?.toLowerCase());
    });
  };

  const contactSubmit = values => {
    const nameArray = contactState.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return dispatch(contactActions.addContact(values));
  };

  const toDelete = id => {
    dispatch(contactActions.deleteContact(id));
    // setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneBookForm onSubmit={contactSubmit} />
      <Title>Contacts</Title>
      <Filter value={contactFilter} filterByName={handleChange} />
      <Contacts filterByName={filterByName} toDelete={toDelete} />
    </div>
  );
};
