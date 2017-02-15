import React from 'react';

export default ({ children, modifier = '', styles = {} }) => <p className={`a-title ${modifier}`} style={styles}>{children}</p>;
