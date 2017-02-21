import React from 'react';
import Label from '../label/label';
import Input from '../input/input';
import Error from '../error/error';

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
      <div className="m-field-error">
        <Error modifier="size-m">{error}</Error>
      </div>
    }
  </div>
);

export default Field;
