import React from 'react';

export default ({ iteratorKey, list }) => (
  <ul className="m-columnList">
    {list.map((item, i) => {
      const key = `${iteratorKey}-${i}`;
      return <li key={key}>{item}</li>;
    })}
  </ul>
);
