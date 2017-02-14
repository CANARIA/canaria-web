import React from 'react';

export default class SignUp extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="l-auth">
        <div className="l-auth__box">
          <div className="l-auth__main">
            <p>welcome to</p>
            <div className="l-auth__main__logo"><img src="https://dl.dropboxusercontent.com/s/d4vie3h8lqqshpc/logo.png" alt="canaria" /></div>
          </div>

          <form className="l-auth__mail">
            <p className="l-auth__title">新規登録</p>

            <div className="l-auth__mail__body">
              <label htmlFor="MailAddress">メールアドレス</label>
              <input type="text" id="MailAddress" name="MailAddress" />
            </div>

            <button className="l-auth__button" type="submit">送信</button>
          </form>
        </div>

        <nav className="l-auth__bottom">
          <ul className="l-auth__nav">
            <li><a className="l-auth__link" href="">利用規約</a></li>
            <li><a className="l-auth__link" href="">プライバシー</a></li>
            <li><a className="l-auth__link" href="">ヘルプ</a></li>
            <li><a className="l-auth__link" href="">フィードバック</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
