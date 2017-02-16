import React from 'react';
import TextButton from '../../atoms/textButton/textButton';
import Column from '../../molecules/column/column';

export default () => (
  <div className="o-authFooter">
    <Column
      iteratorKey="authFooter"
      list={[
        <TextButton to="/terms" modifier="theme-gray size-m">利用規約</TextButton>,
        <TextButton to="/privacy" modifier="theme-gray size-m">プライバシー</TextButton>,
        <TextButton to="/help" modifier="theme-gray size-m">ヘルプ</TextButton>,
        <TextButton modifier="theme-gray size-m">フィードバック</TextButton>
      ]}
    />
  </div>
);
