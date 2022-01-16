import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      {' '}
      Find contacts by name
      <input type="text" name="name" value={value} onChange={onChange} />
    </label>
  );
};
