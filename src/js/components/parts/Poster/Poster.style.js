import styled from 'styled-components'
import Link from '../Link/Link'
import { COLORS } from '../../../constants/application'

export const Wrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
`
export const Item = styled.li`
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
export const User = styled(Link)`
  z-index: 10;
  position: absolute;
  bottom: 60px;
  left: 10px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(34, 34, 34, .6);
  font-size: 0;
  transition: all .3s;
  &:hover {
    background-color: rgba(34, 34, 34, 1);
  }
`
export const Thumb = styled.div`
  overflow: hidden;
  display: inline-block;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  border: 1px solid ${COLORS.WHITE};
  vertical-align: middle;
`
export const Info = styled.div`
  display: inline-block;
  padding-left: 10px;
  color: ${COLORS.WHITE};
  font-size: 1.2rem;
  vertical-align: middle;
`
export const Title = styled.p`margin-bottom: 5px;`
