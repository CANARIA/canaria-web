import React from 'react';

export default ({ name, placeholder, modifier = '', styles = {} }) => (
  <input
    type="text"
    id={name}
    name={name}
    className={`a-inputText ${modifier}`}
    placeholder={placeholder}
    style={styles}
  />
);
