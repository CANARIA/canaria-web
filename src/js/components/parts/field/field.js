import React, { PropTypes } from 'react';
import Label from '../label/label';
import Input from '../input/input';

const Field = ({
  name,
  label,
  input
}) => (
  <div className="c-field">
    {label &&
      <p className="c-field-label"><Label name={name} modifier="theme-gray size-m">{label}</Label></p>
    }

    <Input name={name} type={input.type} placeholder={input.placeholder} required={input.required} modifier="theme-secondary size-m size-wide" />
  </div>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  input: PropTypes.object.isRequired
};

export default Field;
