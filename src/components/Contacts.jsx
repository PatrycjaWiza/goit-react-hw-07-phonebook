import { Button } from './Styles';
import PropTypes from 'prop-types';

export const Contacts = ({ filterByName, toDelete }) => {
  return (
    <ul>
      {filterByName().map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
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
