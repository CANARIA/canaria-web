import React from 'react';
import { Link } from 'react-router';

const Button = ({
  children,
  onClick,
  to,
  href,
  disabled = false,
  modifier = '',
  styles = {}
}) => {
  if (onClick) {
    return <button onClick={onClick} className={`a-button ${modifier}`} disabled={disabled} style={styles}>{children}</button>;
  }

  if (to) {
    return <Link to={to} className={`a-button ${modifier}`} style={styles}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={`a-button ${modifier}`} style={styles}>{children}</a>;
  }

  return <button className={`a-button ${modifier}`} disabled={disabled} style={styles}>{children}</button>;
};

export default Button;
