import React, { Component, PropTypes } from 'react';

export default class Error extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    modifier: PropTypes.string,
    styles: PropTypes.object
  }

  _isString(val) {
    return toString.call(val).includes('String');
  }

  _renderText(str) {
    const {
      modifier = '',
      styles = {}
    } = this.props;

    return <p key={str.toString()} className={`c-error ${modifier}`} style={styles}>{str}</p>;
  }

  render() {
    const { children } = this.props;

    if (this._isString(children)) {
      return (
        <div>
          {children.split('\n').map(item => this._renderText(item))}
        </div>
      );
    }

    return this._renderText(children);
  }
}
