import React from 'react';

import Header from '../../../containers/parts/header/header';

export default () => (
  <div className="p-home">
    <div className="p-home-header">
      <Header />
    </div>

    <nav className="p-home-nav">
      nav
    </nav>

    <aside className="p-home-aside">
      aside
    </aside>

    <div className="p-home-container">
      <main className="p-home-main">
        main
      </main>

      <footer className="p-home-footer">
        footer
      </footer>
    </div>
  </div>
);
