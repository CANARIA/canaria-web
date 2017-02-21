import React from 'react';

const Error = ({
  children,
  modifier = '',
  styles = {}
}) => <p className={`a-error ${modifier}`} style={styles}>{children}</p>;

export default Error;
