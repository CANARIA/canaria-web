import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Poster from '../../parts/Poster/Poster'
import { SIZES } from '../../../constants/application'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${SIZES.MIN_WIDTH}px;
  height: 100vh;
  background-color: #ddd;
`
const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Auth = ({ children, posters }) =>
  <Wrapper>
    <Bg>
      <Poster list={posters} time={20000} />
    </Bg>
    <h1>Auth</h1>
    {children}
  </Wrapper>

Auth.propTypes = {
  children: PropTypes.element.isRequired,
  posters: PropTypes.array.isRequired
}

export default Auth
