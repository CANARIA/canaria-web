import React from 'react';

export default ({ onClick, children, modifier = '' }) => <button onClick={onClick} className={`a-textButton ${modifier}`}>{children}</button>;
