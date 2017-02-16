import React from 'react';
import Field from '../../molecules/field/field';
import Title from '../../atoms/title/title';
import Button from '../../atoms/button/button';

export default ({ title, fieldList, submitText }) => {
  const list = fieldList.map(item => <li key={item.name}><Field {...item} /></li>);

  return (
    <form className="o-authForm">
      <div className="o-authForm__title">
        <Title modifier="theme-gray size-m">{title}</Title>
      </div>

      {list.length &&
        <ul className="o-authForm__body">{list}</ul>
      }

      <Button modifier="theme-primary size-wide size-m">{submitText}</Button>
    </form>
  );
};
