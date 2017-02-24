import React from 'react';
import icons from './icons';

const Icon = ({
  name = '',
  modifier = '',
  styles = {}
}) => {
  const SvgIcon = icons[name];
  return <i className={`a-icon ${name} ${modifier}`} style={styles}><SvgIcon /></i>;
};

export default Icon;
