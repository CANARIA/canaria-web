import React from 'react';

const Input = ({
  onChange,
  name,
  placeholder,
  type = 'text',
  required = false,
  modifier = '',
  styles = {}
}) => (
  <input
    onChange={onChange}
    id={name}
    name={name}
    placeholder={placeholder}
    type={type}
    required={required}
    className={`a-input ${modifier}`}
    style={styles}
  />
);

export default Input;
