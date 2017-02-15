import React from 'react';
import LogoLinkBlack from '../../../atoms/logoLink/logoLinkBlack';
import TextLink from '../../../atoms/textLink/textLink';

export default class SignUp extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="l-auth">
        <div className="l-auth__head">
          <LogoLinkBlack url="/" />

          <div className="l-auth__nav">
            <ul className="l-auth__list">
              <li><TextLink url="/ranking" text="ランキング" color="gray" /></li>
              <li><TextLink url="/new" text="新着" color="gray" /></li>
              <li><TextLink url="/tag" text="タグ" color="gray" /></li>
            </ul>

            <div className="l-auth__button">

            </div>
          </div>
        </div>

        <div className="l-auth__main">

        </div>

        <div className="l-auth__foot"></div>
      </div>
    );
  }
}

            /*<form className="l-auth__mail__form">
              <div className="l-auth__logo"><img src="https://dl.dropboxusercontent.com/s/d4vie3h8lqqshpc/logo.png" alt="canaria" width="100%" height="auto" /></div>

              <p className="l-auth__title">新規登録</p>

              <div className="l-auth__mail__body">
                <input type="text" id="MailAddress" name="MailAddress" placeholder="メールアドレスを入力" />
              </div>

              <button className="l-auth__button" type="submit">送信</button>
            </form>*/

        /*<ul className="l-auth__nav">
          <li><a className="l-auth__link" href="">利用規約</a></li>
          <li><a className="l-auth__link" href="">プライバシー</a></li>
          <li><a className="l-auth__link" href="">ヘルプ</a></li>
          <li><a className="l-auth__link" href="">フィードバック</a></li>
        </ul>*/
