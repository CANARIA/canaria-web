/* @flow */

import React from 'react'
import Home from './Home'

async function action() {
  console.log('homeのaction')
  return {
    chunks: ['home'],
    title: 'Home',
    component: <Home />
  }
}

export default action
