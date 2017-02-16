import React from 'react';
import Field from '../../molecules/field/field';
import Title from '../../atoms/title/title';
import Button from '../../atoms/button/button';

const AuthForm = ({
  title,
  fieldList,
  submitText,
  onSubmit,
  children
}) => {
  const list = fieldList.map(item => <li key={item.name}><Field {...item} /></li>);

  return (
    <form className="o-authForm" onSubmit={onSubmit}>
      <div className="o-authForm__title">
        <Title modifier="theme-gray size-m">{title}</Title>
      </div>

      {list.length &&
        <ul className="o-authForm__body">{list}</ul>
      }

      <Button modifier="theme-primary size-wide size-m">{submitText}</Button>
      {children}
    </form>
  );
};

export default AuthForm;
