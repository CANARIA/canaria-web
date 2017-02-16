import React from 'react';
import icons from './icons';

const Icon = ({
  name = '',
  modifier = '',
  styles = {}
}) => (
  <i className={`a-icon ${modifier}`} style={styles}>
    {icons[name]}
  </i>
);

export default Icon;
