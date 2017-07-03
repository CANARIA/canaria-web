/* @flow */

import home from './home'

const routes = {
  path: '/',

  children: [
    {
      path: '/',
      action: home
    }
  ],

  async action({ next }) {
    const route = await next()

    console.log('rootのaction')
    console.log(route)

    route.title = `${route.title || 'Untitled Page'} - Sample`
    route.description = route.description || ''

    return route
  }
}

export default routes
