/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
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

class Route extends React.Component {
  constructor(props) {
    super(props)

    const { dispatch, history } = this.props

    dispatchLocationChange(dispatch, history.location)
    history.listen(location => dispatchLocationChange(dispatch, location))
  }

  render() {
    return <App>{this.props.route.component}</App>
  }
}

export default connect(state => ({
  router: state.router
}))(Route)
