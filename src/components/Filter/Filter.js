import React from 'react';
import filterStyles from "./Filter.module.css";
const Filter = ({ value, handleChange }) => {
  return (
    <label className={filterStyles.label}>
      Find contacts by name
      <input className={filterStyles.inputFilter} type="text" value={value} onChange={handleChange} />
    </label>
  );
};
export default Filter;
