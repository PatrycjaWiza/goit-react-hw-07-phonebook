import { Button } from './Styles';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, toDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <li key={id}>
          {name}: {phone}
          <Button
            type="submit"
            onClick={() => {
              toDelete(id);
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  filterByName: PropTypes.func,
  toDelete: PropTypes.func,
};
