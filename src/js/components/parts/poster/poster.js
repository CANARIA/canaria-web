import React, { Component, PropTypes } from 'react';

import assign from '../../../helpers/assign';

export default class Poster extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
  }

  constructor(...args) {
    super(...args);

    this.state = { list: this.props.list };
    this.timer = null;
    this.index = 0;
  }

  componentDidMount() {
    this._update();
    this.timer = setInterval(() => {
      this._update(this.state.list, this.setState);
    }, this.props.time);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _update() {
    const { list } = this.state;
    const newList = list.map((item, i) => {
      const visible = i === this.index;
      return assign(item, { visible });
    });

    this.index = (this.index + 1) % list.length;
    this.setState({ list: newList });
  }

  render() {
    return (
      <ul className="c-poster">
        {this.state.list.map(item => <li key={item.path} className={item.visible ? 'is-active' : ''} style={{ backgroundImage: `url(${item.path})` }} />)}
      </ul>
    );
  }
}
