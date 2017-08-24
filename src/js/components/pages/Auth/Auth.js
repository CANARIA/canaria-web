import React from 'react'
import PropTypes from 'prop-types'

import { PATH } from '../../../constants/application'
import Poster from '../../parts/Poster/Poster'
import Button from '../../parts/Button/Button'
import TextButton from '../../parts/TextButton/TextButton'
import { Wrapper, Bg, Main, Header, Footer, List } from './Auth.style'

const Auth = ({ children, posters }) =>
  <Wrapper>
    <Bg>
      <Poster list={posters} time={20000} />
    </Bg>

    <Main>
      <Header>
        <Button to="/" hover="opacity">
          canaria
        </Button>

        <List>
          <li>
            <TextButton to={PATH.RANKING} theme="gray" size="m">
              ランキング
            </TextButton>
          </li>
          <li>
            <TextButton to={PATH.NEW} theme="gray" size="m">
              新着
            </TextButton>
          </li>
          <li>
            <TextButton to={PATH.TAG} theme="gray" size="m">
              タグ
            </TextButton>
          </li>
          <li>
            <Button to={PATH.SIGNUP} hover="bright" theme="secondary" size="m">
              新規登録
            </Button>
          </li>
        </List>
      </Header>

      <div>
        {children}
      </div>

      <Footer>
        <List>
          <li>
            <TextButton to={PATH.TERMS} theme="gray" size="m">
              利用規約
            </TextButton>
          </li>
          <li>
            <TextButton to={PATH.PRIVACY} theme="gray" size="m">
              プライバシー
            </TextButton>
          </li>
          <li>
            <TextButton to={PATH.HELP} theme="gray" size="m">
              ヘルプ
            </TextButton>
          </li>
          <li>
            <TextButton
              onClick={() => console.log('click feedback!')}
              theme="gray"
              size="m"
            >
              フィードバック
            </TextButton>
          </li>
        </List>
      </Footer>
    </Main>
  </Wrapper>

Auth.propTypes = {
  children: PropTypes.element.isRequired,
  posters: PropTypes.array.isRequired
}

export default Auth
