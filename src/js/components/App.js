/* @flow */

import React from 'react'

class App extends React.PureComponent {
  render() {
    return React.Children.only(this.props.children)
  }
}

export default App
