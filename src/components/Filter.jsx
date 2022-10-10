import { Input } from './Styles';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
