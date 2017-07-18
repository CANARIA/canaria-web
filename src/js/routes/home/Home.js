import React from 'react'
import styled from 'styled-components'

import Link from '../../components/parts/Link/Link'

const Wrapper = styled.div`background-color: red;`

const Home = () =>
  <Wrapper>
    <h1>Home</h1>
    <nav>
      <ul>
        <li>
          <Link to="/login">to login</Link>
        </li>
      </ul>
    </nav>
  </Wrapper>

export default Home
