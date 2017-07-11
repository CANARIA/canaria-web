/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import { locationChange } from '../actions/history'

function dispatchLocationChange(dispatch, location) {
  dispatch(
    locationChange({
      pathname: location.pathname,
      search: location.search,
      hash: location.hash
    })
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    const { children, dispatch, history } = this.props

    this.state = { children }

    dispatchLocationChange(dispatch, history.location)
    history.listen(location => dispatchLocationChange(dispatch, location))
  }

  componentWillUpdate(prevProps, prevState) {
    const prevRouter = prevProps.router
    const currentRouter = this.props.router

    console.log('よばれた？')
    console.log(prevRouter)
    console.log(currentRouter)
    console.log('よばれた？')

    if (
      prevRouter.pathname !== currentRouter.pathname ||
      prevRouter.hash !== currentRouter.hash ||
      prevRouter.search !== currentRouter.search
    ) {
      console.log('とどいた？')
      const { historyController } = this.props

      historyController.resolve({ path: prevRouter.pathname }).then(route => {
        this.setState({
          children: route.component
        })
      })
    }
  }

  render() {
    return React.Children.only(this.state.children)
  }
}

export default connect(state => ({
  router: state.router
}))(App)
