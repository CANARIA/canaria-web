import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  push as pushAction,
  replace as replaceAction
} from '../../actions/history'

class Link extends React.PureComponent {
  static propTypes = {
    replace: PropTypes.bool,
    to: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
      .isRequired
  }

  constructor(props) {
    super(props)

    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick(e) {
    if (
      (e.button && e.button !== 0) ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.defaultPrevented === true
    ) {
      return
    }

    e.preventDefault()

    const { replace, dispatch, to } = this.props

    if (replace) {
      dispatch(replaceAction(to))
    } else {
      dispatch(pushAction(to))
    }
  }

  render() {
    return (
      <a href="" onClick={this._handleClick}>
        {this.props.children}
      </a>
    )
  }
}

export default connect()(Link)
