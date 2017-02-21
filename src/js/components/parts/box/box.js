import React from 'react';

const Box = ({
  children,
  modifier = '',
  styles = {}
}) => <div className={`m-box ${modifier}`} style={styles}>{children}</div>;

export default Box;
