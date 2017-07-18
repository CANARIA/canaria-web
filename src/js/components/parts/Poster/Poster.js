import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import assign from '../../../helpers/assign'

const Wrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
`
const Item = styled.li`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: no-repeat center center;
  background-size: cover;
  transition: all 2s;
  &.is-active {
    opacity: 1;
    visibility: visible;
  }
`

export default class Poster extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired
      })
    ),
    time: PropTypes.number.isRequired
  }

  constructor(...args) {
    super(...args)

    this.state = { list: this.props.list }
    this.timer = null
    this.index = 0
  }

  componentDidMount() {
    this._update()
    this.timer = setInterval(() => {
      this._update()
    }, this.props.time)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  _update() {
    const { list } = this.state
    const newList = list.map((item, i) => {
      const visible = i === this.index
      return assign(item, { visible })
    })

    this.index = (this.index + 1) % list.length
    this.setState({ list: newList })
  }

  render() {
    return (
      <Wrapper>
        {this.state.list.map(item =>
          <Item
            key={item.path}
            className={item.visible ? 'is-active' : ''}
            style={{ backgroundImage: `url(${item.path})` }}
          />
        )}
      </Wrapper>
    )
  }
}
