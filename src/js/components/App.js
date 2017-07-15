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
    const prevRouting = prevProps.routing
    const currentRouting = this.props.routing

    if (
      prevRouting.pathname !== currentRouting.pathname ||
      prevRouting.hash !== currentRouting.hash ||
      prevRouting.search !== currentRouting.search
    ) {
      const { router } = this.props

      router.resolve({ path: prevRouting.pathname }).then(route => {
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
  routing: state.routing
}))(App)
