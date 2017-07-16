import { PATH, SERVICE_NAME } from '../constants/application'

import home from './home'
import login from './auth/login'

const routes = {
  path: '/',

  children: [
    {
      path: PATH.HOME,
      action: home
    },
    {
      path: PATH.LOGIN,
      action: login
    }
  ],

  async action({ next }) {
    const route = await next()

    route.title = `${route.title || 'Untitled Page'} - ${SERVICE_NAME}`
    route.description = route.description || ''

    return route
  }
}

export default routes
