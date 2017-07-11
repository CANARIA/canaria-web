/* @flow */

import React from 'react'
import Link from '../../components/parts/Link'

const Home = () =>
  <div>
    <h1>Home</h1>
    <nav>
      <ul>
        <li>
          <Link to="/user">to user</Link>
        </li>
      </ul>
    </nav>
  </div>

export default Home
