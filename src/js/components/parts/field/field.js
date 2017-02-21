import React from 'react';
import Label from '../label/label';
import Input from '../input/input';

const Field = ({
  name,
  label,
  input
}) => (
  <div className="m-field">
    {label &&
      <p className="m-field-label"><Label name={name} modifier="theme-gray size-m">{label}</Label></p>
    }

    <Input name={name} type={input.type} placeholder={input.placeholder} required={input.required} modifier="theme-primary size-m size-wide" />
  </div>
);

export default Field;
