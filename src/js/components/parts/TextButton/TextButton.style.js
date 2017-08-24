import styled from 'styled-components'
import Link from '../Link/Link'
import { COLORS } from '../../../constants/application'

const base = `
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const themes = {
  gray: `
    color: ${COLORS.FONT_GRAY};
    &::after {
      border-top-color: color: ${COLORS.FONT_GRAY};
    }
  `,
  secondary: `
    color: ${COLORS.SECONDARY};
    &::after {
      border-top-color: color: ${COLORS.SECONDARY};
    }
  `
}
const sizes = {
  m: `
    font-size: 1.2rem;
    &::after {
      margin-left: 5px;
      border-top: 6px solid;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      vertical-align: 1px;
    }
  `
}
const arrow = `
  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    content: "";
  }
`

export default ({ theme, size }) => {
  const stylesheet = [
    base,
    themes[theme] ? themes[theme] : '',
    sizes[size] ? sizes[size] : ''
  ].join('')

  return {
    Button: styled.button`${stylesheet}${arrow}`,
    Anchor: styled.a`${stylesheet};`,
    Link: styled(Link)`${stylesheet};`
  }
}
