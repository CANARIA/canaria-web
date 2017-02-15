import React from 'react';
import { Link } from 'react-router';

export default ({ url }) => (
  <Link to={url} className="a-logoLink">
    <img src="https://dl.dropboxusercontent.com/s/vl511wi7m8632cn/logo-black.png" alt="canaria" width="100px" height="auto" />
  </Link>
);
