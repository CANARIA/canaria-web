import React from 'react';
import FormList from '../../molecules/formList/formList';
import Title from '../../atoms/title/title';
import Button from '../../atoms/button/button';

export default ({ form }) => (
  <form className="o-authForm">
    <div className="o-authForm__title">
      <Title modifier="center gray">{form.title}</Title>
    </div>

    <div className="o-authForm__body">
      <FormList list={form.list} />
    </div>

    <Button modifier="theme">{form.submitText}</Button>
  </form>
);
