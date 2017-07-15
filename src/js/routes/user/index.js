import React from 'react'
import User from './User'

async function action() {
  return {
    chunks: ['user'],
    title: 'User',
    component: <User />
  }
}

export default action
