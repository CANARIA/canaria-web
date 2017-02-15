import React from 'react';
import { Link } from 'react-router';

export default ({ url, text, color }) => (
  <Link to={url} className={`a-textLink is-${color}`}>{text}</Link>
);
