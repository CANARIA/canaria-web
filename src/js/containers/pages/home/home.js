import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navi from '../../../components/parts/navi/navi';
import Footer from '../../../components/parts/footer/footer';

class Home extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  render() {
    const { children, location, auth } = this.props;

    return (
      <div className="p-home">
        <div className="p-home-header">
          Header
        </div>

        <nav className="p-home-nav">
          <Navi auth={auth} location={location} />
        </nav>

        <aside className="p-home-aside">
          aside
        </aside>

        <div className="p-home-container">
          <main className="p-home-main">
            {children}
          </main>

          <div className="p-home-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(Home);
