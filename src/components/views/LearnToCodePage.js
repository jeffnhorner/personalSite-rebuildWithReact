import React, { Component } from 'react';
import { Link } from '@reach/router';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class LearnToCodePage extends Component {
  render() {
    return (
      <div id="learn-to-code" className="main-content">
        <div className="cc-container-internal">
          <h1>Coming Soon</h1>

          <div className="cta">
            <Link id="connect" to='/portfolio'>See My Work</Link>
            <Link id="jobs" to='/contact'>Get In Touch!</Link>
          </div>
        </div>
      </div>
     );
  }
}

export default LearnToCodePage;