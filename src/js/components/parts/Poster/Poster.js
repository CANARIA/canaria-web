import React from 'react'
import PropTypes from 'prop-types'
import assign from '../../../helpers/assign'
import { Wrapper, Item, User, Thumb, Info, Title } from './Poster.style'

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
            key={item.id}
            className={item.visible ? 'is-active' : ''}
            style={{ backgroundImage: `url(${item.path})` }}
          >
            <User to={`/${item.user.name}`}>
              <Thumb>
                <img src={item.user.thumb} width="40px" height="40px" />
              </Thumb>
              <Info>
                <Title>
                  {item.title}
                </Title>
                <p>
                  drawn by @{item.user.name}
                </p>
              </Info>
            </User>
          </Item>
        )}
      </Wrapper>
    )
  }
}
