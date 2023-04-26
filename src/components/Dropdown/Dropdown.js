import { Filter, Select } from './Dropdown.styled';
import PropTypes from 'prop-types';

const Dropdown = ({ setFilter }) => {
  const handleFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <Filter>
      <label>
        Select filter:
        <Select onInput={handleFilter}>
          <option value="all">All</option>
          <option value="following">Following</option>
          <option value="follow">Follow</option>
        </Select>
      </label>
    </Filter>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
