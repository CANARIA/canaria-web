import React, { PropTypes } from 'react';

const Label = ({
  name,
  children,
  modifier = '',
  styles = {}
}) => <label htmlFor={name} className={`c-label ${modifier}`} style={styles}>{children}</label>;

Label.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Label;
