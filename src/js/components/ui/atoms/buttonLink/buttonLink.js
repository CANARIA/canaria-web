import React from 'react';
import { Link } from 'react-router';

export default ({ to, children, modifier = '', styles = {} }) => <Link to={to} className={`a-buttonLink ${modifier}`} style={styles}>{children}</Link>;
