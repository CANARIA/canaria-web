import React from 'react';

export default ({ name, children, modifier = '', styles = {} }) => <label htmlFor={name} className={`a-label ${modifier}`} style={styles}>{children}</label>;
