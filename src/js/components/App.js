import React from 'react'
import PropTypes from 'prop-types'
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
  static propTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      listen: PropTypes.func.isRequired,
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
        hash: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    routing: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired
    }).isRequired,
    router: PropTypes.shape({
      resolve: PropTypes.func.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props)

    const { children, dispatch, history } = this.props

    this.state = { children }

    dispatchLocationChange(dispatch, history.location)
    history.listen(location => dispatchLocationChange(dispatch, location))
  }

  componentWillUpdate(prevProps) {
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
