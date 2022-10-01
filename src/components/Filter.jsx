import { Input } from './Styles';
import PropTypes from 'prop-types';

export const Filter = ({ filterByName, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={filterByName}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  filterByName: PropTypes.func,
  value: PropTypes.string,
};
