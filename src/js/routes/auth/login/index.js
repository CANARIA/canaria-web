import React from 'react'

import posterService from '../../../services/posterService'
import Login from './Login'

async function action() {
  const posters = await posterService.fetch().catch(() => [])

  return {
    chunks: ['login'],
    title: 'Login',
    component: <Login posters={posters} />
  }
}

export default action
