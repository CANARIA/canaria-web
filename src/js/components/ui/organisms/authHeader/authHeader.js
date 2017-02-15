import React from 'react';
import LogoLink from '../../atoms/logoLink/logoLink';
import TextLink from '../../atoms/textLink/textLink';
import ButtonLink from '../../atoms/buttonLink/buttonLink';
import ColumnList from '../../molecules/columnList/columnList';

export default ({ authButton }) => (
  <div className="o-authHeader">
    <LogoLink to="/" modifier="black" />

    <div className="l-auth-nav">
      <ColumnList
        iteratorKey="head"
        list={[
          <TextLink to="/ranking" modifier="gray">ランキング</TextLink>,
          <TextLink to="/new" modifier="gray">新着</TextLink>,
          <TextLink to="/tag" modifier="gray">タグ</TextLink>,
          <ButtonLink to={authButton.to} modifier="primary">{authButton.text}</ButtonLink>
        ]}
      />
    </div>
  </div>
);
