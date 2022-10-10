import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from 'redux/actions';
import { useEffect } from 'react';
import { Title } from './Styles';
import { addContact, deleteContact, fetchContacts } from 'services/api';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { PhoneBookForm } from './PhonebookForm';

export const App = () => {
  const contactState = useSelector(state => state.contacts.items);
  const contactFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);

  const filterContacts = useSelector(state =>
    contactState.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    )
  );

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleChange = e => {
    dispatch(contactActions.addFilter(e.target.value));
  };

  const contactSubmit = values => {
    const nameArray = contactState.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return dispatch(addContact(values));
  };

  const toDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneBookForm onSubmit={contactSubmit} />
      <Title>Contacts</Title>
      <Filter value={contactFilter} onChange={handleChange} />
      {isLoading && <p>Loading...</p>}
      {contactState === null ? (
        <p>No contacts</p>
      ) : (
        <Contacts contacts={filterContacts} toDelete={toDelete} />
      )}
      {isError && <p>error.message</p>}
    </div>
  );
};
