import React from 'react';

const Column = ({
  iteratorKey = 'defaultKey',
  list = [],
  modifier = '',
  styles = {}
}) => {
  if (!list.length) {
    return null;
  }

  return (
    <ul className={`m-column ${modifier}`} style={styles}>
      {list.map((item, i) => {
        const key = `${iteratorKey}-${i}`;
        return <li key={key}>{item}</li>;
      })}
    </ul>
  );
};

export default Column;
