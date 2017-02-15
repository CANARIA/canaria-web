import React from 'react';
import Label from '../../atoms/label/label';
import InputText from '../../atoms/inputText/inputText';

export default ({ list }) => (
  <ul className="m-formList">
    {list.map((item) => {
      let label;

      if (item.label) {
        label = <Label name={item.name} modifier="gray" styles={{ marginBottom: '10px' }}>{item.label}</Label>;
      }

      return (
        <li key={item.name}>
          {label}
          <InputText name={item.name} placeholder={item.placeholder} />
        </li>
      );
    })}
  </ul>
);
