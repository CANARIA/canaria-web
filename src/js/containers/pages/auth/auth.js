import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { PATH } from '../../../constants/application';
import { authInitialize } from '../../../actions/auth';
import { fetchPosters } from '../../../actions/poster';
import posterRepositoryService from '../../../services/posterRepositoryService';

import Poster from '../../../components/parts/poster/poster';
import Button from '../../../components/parts/button/button';
import TextButton from '../../../components/parts/textButton/textButton';
import Icon from '../../../components/parts/icon/icon';
import Column from '../../../components/parts/column/column';

const preFetch = dispatch => new Promise(async (resolve) => {
  const posters = await posterRepositoryService.fetch().catch(() => []);
  dispatch(fetchPosters(posters));
  resolve();
});

class Auth extends Component {
  static preFetch(renderProps, dispatch) {
    return preFetch(dispatch);
  }

  static getRedirectUrl(renderProps, store) {
    const auth = store.getState().auth;
    return auth.authenticated ? `/${PATH.FEED}` : null;
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired,
    poster: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { dispatch, poster } = this.props;

    if (!poster.list.length) {
      Auth.preFetch(null, dispatch);
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps) {
      this.props.dispatch(authInitialize());
    }
  }

  render() {
    const { children, location, poster } = this.props;
    const authLink = location.pathname.includes(PATH.SIGNUP) ? {
      name: 'ログイン',
      path: PATH.LOGIN
    } : {
      name: '新規登録',
      path: PATH.SIGNUP
    };

    return (
      <div className="p-auth">
        <div className="p-auth-posters"><Poster list={poster.list} time={20000} /></div>

        <div className="p-auth-main">
          <header className="p-auth-bar is-head">
            <Button to="/" hover="opacity"><Icon name="logo2" /></Button>

            <Column
              iteratorKey="authHead"
              list={[
                <TextButton to="/ranking" modifier="theme-gray size-m">ランキング</TextButton>,
                <TextButton to="/new" modifier="theme-gray size-m">新着</TextButton>,
                <TextButton to="/tag" modifier="theme-gray size-m">タグ</TextButton>,
                <Button to={authLink.path} hover="filter" modifier="theme-secondary size-m">{authLink.name}</Button>
              ]}
              modifier="size-m"
            />
          </header>

          <div className="p-auth-box">{children}</div>

          <footer className="p-auth-bar is-foot">
            <Column
              iteratorKey="authFoot"
              list={[
                <TextButton to="/terms" modifier="theme-gray size-m">利用規約</TextButton>,
                <TextButton to="/privacy" modifier="theme-gray size-m">プライバシー</TextButton>,
                <TextButton to="/help" modifier="theme-gray size-m">ヘルプ</TextButton>,
                <TextButton modifier="theme-gray size-m">フィードバック</TextButton>
              ]}
              modifier="size-m"
            />
          </footer>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  poster: state.poster
}))(Auth);
