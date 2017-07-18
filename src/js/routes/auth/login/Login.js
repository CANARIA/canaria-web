import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Auth from '../../../components/pages/Auth/Auth'

const Text = styled.p`color: red;`

const Login = ({ posters }) =>
  <Auth posters={posters}>
    <Text>Login</Text>
  </Auth>

Login.propTypes = {
  posters: PropTypes.array.isRequired
}

export default Login
