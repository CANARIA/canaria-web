import { Component, PropTypes } from 'react';

import { checkLoginTokenUsecaseFactory } from '../usecases/checkLoginTokenUsecase';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static preFetch(renderProps, dispatch) {
    return checkLoginTokenUsecaseFactory.create().execute(dispatch);
  }

  render() {
    return this.props.children;
  }
}

/*
import Head from './head';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Head />
        {this.props.children}
      </div>
    );
  }
}*/
