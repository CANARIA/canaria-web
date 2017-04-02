import { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return this.props.children;
  }
}

/*
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
}*/
