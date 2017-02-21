import React from 'react';
import Label from '../label/label';
import Input from '../input/input';

const Field = ({
  error,
  name,
  label,
  input
}) => (
  <div className="m-field">
    {label &&
      <p className="m-field-label"><Label name={name} modifier="theme-gray size-m">{label}</Label></p>
    }

    <Input name={name} type={input.type} placeholder={input.placeholder} required={input.required} modifier="theme-primary size-m size-wide" />

    {error &&
      <p className="m-field-error">{error}</p>
    }
  </div>
);

export default Field;
