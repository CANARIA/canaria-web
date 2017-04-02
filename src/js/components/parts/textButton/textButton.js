import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TextButton = ({
  children,
  onClick,
  to,
  href,
  modifier = '',
  styles = {}
}) => {
  if (onClick) {
    return <button onClick={onClick} className={`c-textButton ${modifier}`} style={styles}>{children}</button>;
  }

  if (to) {
    return <Link to={to} className={`c-textButton ${modifier}`} style={styles}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={`c-textButton ${modifier}`} style={styles}>{children}</a>;
  }

  return <button className={`c-textButton ${modifier}`} style={styles}>{children}</button>;
};

TextButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default TextButton;
