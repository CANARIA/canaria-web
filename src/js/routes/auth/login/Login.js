import React from 'react'
import styled from 'styled-components'

import Auth from '../../../components/pages/Auth'

const Text = styled.p`color: red;`

const Login = ({ posters }) =>
  <Auth posters={posters}>
    <Text>Login</Text>
  </Auth>

export default Login
