import React from 'react';
import { Link } from 'react-router';

export default ({ to, modifier = '', styles = {} }) => <Link to={to} className={`a-logoLink ${modifier}`} style={styles}>canaria</Link>;
