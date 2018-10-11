import React, { Component } from 'react';
import { Link } from '@reach/router';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class HomePage extends Component {
  render() {
    return (
      <div id="home" className="main-content">
        <h2>Jeff Horner</h2>
        <div className="cc-container-main">
          <h1>UX/UI Developer & Designer</h1>
          <p>Passionate purpose-driven Web Developer & Designer based in Houston, Texas with an emphasis on making online experiences memorable.</p>
          <div className="profile-list">
            <a href="https://www.facebook.com/jeffnhorner" rel="noopener noreferrer" target="_blank" title="My Facebook Profile"><i className="fa fa-facebook profiles" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/jeffnhorner" rel="noopener noreferrer" target="_blank" title="My Instagram Profile"><i className="fa fa-instagram profiles" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/jeff-horner-bb48124b/" rel="noopener noreferrer" target="_blank" title="My LinkedIn Profile"><i className="fa fa-linkedin-square profiles" aria-hidden="true"></i></a>
            <a href="https://github.com/jhorner32" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square profiles"></i></a>
            <a href="https://codepen.io/jhorner32/" rel="noopener noreferrer" target="_blank" title="My Codepen Profile"><i className="fa fa-codepen profiles" aria-hidden="true"></i></a>
            <a href="https://www.freecodecamp.org/jhorner32" rel="noopener noreferrer" target="_blank" title="My FreeCodeCamp Profile"><i className="fa fa-free-code-camp profiles" aria-hidden="true"></i></a>
          </div>
          <div className="cta">
            <Link id="connect" to='/portfolio'>See My Work</Link>
            <Link id="jobs" to='/contact'>Get In Touch!</Link>
          </div>
        </div>
      </div>
     );
  }
}

export default HomePage;