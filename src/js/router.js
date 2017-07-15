import Router from 'universal-router'
import routes from './routes'

export default new Router(
  routes,
  {
    // resolveRoute: (context, params) => {
    //   if (typeof context.route.action === 'function') {
    //     return context.route.action(context, params)
    //   }
    //   return null
    // }
  }
)
