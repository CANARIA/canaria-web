import React, { PropTypes } from 'react';

const Box = ({
  children,
  modifier = '',
  styles = {}
}) => <div className={`c-box ${modifier}`} style={styles}>{children}</div>;

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Box;
