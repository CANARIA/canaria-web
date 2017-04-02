import React, { PropTypes } from 'react';
import icons from './icons';

const Icon = ({
  name = '',
  modifier = '',
  styles = {}
}) => {
  const SvgIcon = icons[name];
  return <i className={`c-icon ${name} ${modifier}`} style={styles}><SvgIcon /></i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Icon;
