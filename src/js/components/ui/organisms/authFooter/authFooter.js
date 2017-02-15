import React from 'react';
import TextLink from '../../atoms/textLink/textLink';
import TextButton from '../../atoms/textButton/textButton';
import ColumnList from '../../molecules/columnList/columnList';

export default () => (
  <div className="o-authFooter">
    <ColumnList
      iteratorKey="foot"
      list={[
        <TextLink to="/terms" modifier="gray">利用規約</TextLink>,
        <TextLink to="/privacy" modifier="gray">プライバシー</TextLink>,
        <TextLink to="/help" modifier="gray">ヘルプ</TextLink>,
        <TextButton modifier="gray">フィードバック</TextButton>
      ]}
    />
  </div>
);
