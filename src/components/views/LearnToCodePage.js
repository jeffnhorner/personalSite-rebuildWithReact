import React, { Component } from 'react';
import { Link } from '@reach/router';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class LearnToCodePage extends Component {

  removeClass() {
    document.body.classList.remove('learn-to-code');
  }

  render() {
    return (
      <div id="learn-to-code" className="main-content">
        <div className="cc-container-internal">
          <h1>Coming Soon</h1>

          <div className="cta">
            <Link onClick={this.removeClass} id="connect" to='/portfolio'>See My Work</Link>
            <Link onClick={this.removeClass} id="jobs" to='/contact'>Get In Touch!</Link>
          </div>
        </div>
      </div>
     );
  }
}

export default LearnToCodePage;