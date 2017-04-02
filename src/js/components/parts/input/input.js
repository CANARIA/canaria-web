import React, { PropTypes } from 'react';

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
    className={`c-input ${modifier}`}
    style={styles}
  />
);

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Input;
