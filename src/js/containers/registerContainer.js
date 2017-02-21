import React from 'react';
import { connect } from 'react-redux';

class RegisterContainer extends React.Component {

  componentWillMount() {
    const { register_token } = this.props.location.query;

    console.log(register_token);
  }

  render() {
    return <div>hoge</div>;
  }
}

export default connect(state => ({}))(RegisterContainer);
