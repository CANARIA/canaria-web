import React from 'react';
import Icon from '../../atoms/icon/icon';
import TextButton from '../../atoms/textButton/textButton';
import Button from '../../atoms/button/button';
import Column from '../../molecules/column/column';

export default ({ anotherAuth }) => (
  <div className="o-authHeader">
    <Button to="/"><Icon name="logo" /></Button>

    <Column
      iteratorKey="authHeader"
      list={[
        <TextButton to="/ranking" modifier="theme-gray size-m">ランキング</TextButton>,
        <TextButton to="/new" modifier="theme-gray size-m">新着</TextButton>,
        <TextButton to="/tag" modifier="theme-gray size-m">タグ</TextButton>,
        <Button to={anotherAuth.to} modifier="theme-secondary size-m">{anotherAuth.text}</Button>
      ]}
    />
  </div>
);
