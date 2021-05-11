import React  from 'react';

import './searchBox.Style.css';

export const SearchBx = ({placeholder , EventHandler}) => {
  return (
    <input
      className="searchBox"
      type="search"
      placeholder={placeholder}
      onChange={EventHandler}
    />
  );
};
