import React from 'react';

const Title = ({
  children,
  modifier = '',
  styles = {}
}) => <p className={`a-title ${modifier}`} style={styles}>{children}</p>;

export default Title;
