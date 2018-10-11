import React from 'react';

import '../../styles/styles.css';
import '../../styles/responsive.css';

const MobileNav = () => (
  <div className="navbar-header">
    <button id="nav-menu-btn" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-collapse" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <i id="x-menu-btn" className="fa fa-times hide"></i>
    </button>
  </div>
);

export default MobileNav;