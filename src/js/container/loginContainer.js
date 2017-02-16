import React from 'react';
import Login from '../components/pages/login/login';

export default class LoginContainer extends React.Component {

  componentDidMount() {
    console.log('hoge');
  }

  render() {
    return <Login />;
  }
}
