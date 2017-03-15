import React from 'react';
import Head from './head';

import { checkLoginTokenUseCaseFactory } from '../usecases/checkLoginTokenUsecase';

export default class App extends React.Component {
  static fetchData(renderProps, dispatch) {
    checkLoginTokenUseCaseFactory.create().execute(dispatch);
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
