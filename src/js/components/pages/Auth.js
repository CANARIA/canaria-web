import React from 'react'
import styled from 'styled-components'

import Link from '../../components/parts/Link'
import { SIZES } from '../../constants/application'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${SIZES.MIN_WIDTH}px;
  height: 100vh;
  background-color: #ddd;
`

const Auth = ({ children, posters }) =>
  <Wrapper>
    <h1>Auth</h1>
    <Link to="/">to home</Link>
    {children}
  </Wrapper>

export default Auth
