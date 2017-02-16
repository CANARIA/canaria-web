import React from 'react';
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
    return <button onClick={onClick} className={`a-textButton ${modifier}`} style={styles}>{children}</button>;
  }

  if (to) {
    return <Link to={to} className={`a-textButton ${modifier}`} style={styles}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={`a-textButton ${modifier}`} style={styles}>{children}</a>;
  }

  return <button className={`a-textButton ${modifier}`} style={styles}>{children}</button>;
};

export default TextButton;
