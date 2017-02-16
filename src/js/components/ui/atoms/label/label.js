import React from 'react';

const Label = ({
  name,
  children,
  modifier = '',
  styles = {}
}) => <label htmlFor={name} className={`a-label ${modifier}`} style={styles}>{children}</label>;

export default Label;
