import React from 'react';
import Head from '../components/head';

import { checkLoginTokenUseCaseFactory } from '../usecases/checkLoginTokenUsecase';

export default class App extends React.Component {
  static fetchData() {
    checkLoginTokenUseCaseFactory.create().execute();
  }

  render() {
    return (
      <div>
        <Head />
        {this.props.children}
      </div>
    );
  }
}
