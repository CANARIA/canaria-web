import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Button = ({
  children,
  onClick,
  to,
  href,
  disabled = false,
  hoverType = 'opacity',
  modifier = '',
  styles = {}
}) => {
  if (onClick) {
    return <button onClick={onClick} className={`c-button ${hoverType} ${modifier}`} disabled={disabled} style={styles}>{children}</button>;
  }

  if (to) {
    return <Link to={to} className={`c-button ${hoverType} ${modifier}`} style={styles}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={`c-button ${hoverType} ${modifier}`} style={styles}>{children}</a>;
  }

  return <button className={`c-button ${hoverType} ${modifier}`} disabled={disabled} style={styles}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  hoverType: PropTypes.string,
  modifier: PropTypes.string,
  styles: PropTypes.object
};

export default Button;
