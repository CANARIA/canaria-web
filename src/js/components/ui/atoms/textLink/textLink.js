import React from 'react';
import { Link } from 'react-router';

export default ({ to, children, modifier = '' }) => <Link to={to} className={`a-textLink ${modifier}`}>{children}</Link>;
