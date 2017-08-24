import styled from 'styled-components'
import Link from '../Link/Link'
import { COLORS } from '../../../constants/application'

const base = `
  display: inline-block;
  line-height: 1;
  border-radius: 3px;
  cursor: pointer;
  transition: all .3s;
`
const themes = {
  primary: `
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
  `,
  secondary: `
    background-color: ${COLORS.SECONDARY};
    color: ${COLORS.WHITE};
  `,
  cancel: `
    background-color: ${COLORS.CANCEL};
    color: ${COLORS.WHITE};
  `
}
const sizes = {
  wide: `
    width: 100%;
  `,
  m: `
    font-size: 1.4rem;
    padding: 10px;
  `,
  s: `
    font-size: 1.2rem;
    padding: 8px 10px;
  `
}
const hovers = {
  opacity: `
    &:hover { opacity: .7; }
  `,
  bright: `
    &:hover { filter: brightness(1.1); }
  `
}

export default ({ theme, size, hover }) => {
  const stylesheet = [
    base,
    themes[theme] ? themes[theme] : '',
    sizes[size] ? sizes[size] : '',
    hovers[hover] ? hovers[hover] : ''
  ].join('')
  const tag = tagname => styled[tagname]`${stylesheet};`
  const link = styled(Link)`${stylesheet};`

  return {
    Button: tag('button'),
    Anchor: tag('a'),
    Link: link
  }
}
