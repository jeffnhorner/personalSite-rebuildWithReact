import React, { Component } from 'react';
import { Link } from '@reach/router';

import jeffImage from '../../assets/images/new-headshot.jpg';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class AboutPage extends Component {
  render() {
    return (
      <div id="about" className="main-content">
        <div className="cc-container-internal">
          <h1>Who I Am</h1>
          <hr />
          <div id="mobile-img" className="thumbnail">
            <img src={jeffImage} alt="Jeff" />
          </div>
          <p>I'm a passionate, purpose-driven, UX/UI Developer and Designer that is happily married to the most wonderful woman in the world. Shameless plug, she's an outstanding photographer and you can view her work <a className="p-link" href="https://www.kelseyhornerphotography.com" target="_blank" rel="noopener noreferrer">here</a>. I'm also a coffee enthusiast that loves to solve problems and find solutions. Lastly, but most importantly, I serve a gracious, forgiving, and loving Jesus.</p>
          <p>I'd like to break down "purpose-driven". I’m passionate about developing an online presence for individuals and companies to give them exactly what they need in the crazy digital world we live in. For me, it's far more so than just building a website, web app, or developing a feature. To simply be able to serve someone and give them an opportunity to live a better and more efficient life from what I’ve developed is the entire reason why I started creating.</p>
          <p>Outside of my freelance background, I have experience working at one of the top Digital Marketing Agencies in Houston, TX. I focus on UX/UI Development and Design for large B2B clients and have had the privilege to work on many meaningful and challenging projects.</p>
          <p>Take a look around and feel free to contact me with any requests or questions!</p>
          <div className="cta">
            <Link id="connect" to='/portfolio'>See My Work</Link>
            <Link id="jobs" to='/contact'>Get In Touch!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;