import React from 'react';

export default ({ onClick, children, modifier = '', styles = {} }) => (
  <button
    onClick={onClick && onClick}
    className={`a-button ${modifier}`}
    style={styles}
  >
    {children}
  </button>
);
