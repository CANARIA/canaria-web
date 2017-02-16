import React from 'react';

const Input = ({
  onChange,
  name,
  placeholder,
  type = 'text',
  modifier = '',
  styles = {}
}) => (
  <input
    onChange={onChange}
    id={name}
    name={name}
    placeholder={placeholder}
    type={type}
    className={`a-input ${modifier}`}
    style={styles}
  />
);

export default Input;
