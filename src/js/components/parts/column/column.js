import React, { PropTypes } from 'react';

const Column = ({
  list,
  iteratorKey,
  modifier = '',
  styles = {}
}) => {
  if (!list.length) {
    return null;
  }

  return (
    <ul className={`c-column ${modifier}`} style={styles}>
      {list.map((item, i) => {
        const key = `${iteratorKey}-${i}`;
        return <li key={key}>{item}</li>;
      })}
    </ul>
  );
};

Column.propTypes = {
  list: PropTypes.array.isRequired,
  iteratorKey: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Column;
