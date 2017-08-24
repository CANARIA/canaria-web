import styled from 'styled-components'
import { SIZES } from '../../../constants/application'

export const Wrapper = styled.div`
  position: relative;
  min-width: ${SIZES.MIN_WIDTH}px;
  height: 100vh;
  background-color: #ddd;
`
export const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, .95);
`
export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, .95);
`
export const List = styled.ul`
  font-size: 0;
  & > li {
    display: inline-block;
    margin: 0 10px;
    &:first-child {
      margin-left: 0 !important;
    }
    &:last-child {
      margin-right: 0 !important;
    }
  }
`
