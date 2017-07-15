import home from './home'
import user from './user'

const routes = {
  path: '/',

  children: [
    {
      path: '/',
      action: home
    },
    {
      path: '/user',
      action: user
    }
  ],

  async action({ next }) {
    const route = await next()

    route.title = `${route.title || 'Untitled Page'} - Sample`
    route.description = route.description || ''

    return route
  }
}

export default routes
