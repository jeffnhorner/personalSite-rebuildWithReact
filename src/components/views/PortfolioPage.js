import React, { Component } from 'react';
import { Link } from '@reach/router';

import khpNewImage from '../../assets/images/khp-new.jpg';
import khpMobileImage from '../../assets/images/khp-new1.jpg';
import oldPortfolioImage from '../../assets/images/jeffnhorner.jpg';
import oldPortfolioSiteImage from '../../assets/images/old-portfolio.jpg';
import atiImage from '../../assets/images/ati-new.jpg';
import hdImage from '../../assets/images/HDlogo.jpg';
import newPortfolioImage from '../../assets/images/new-portfolio.jpg';
import newWeatherAppImage from '../../assets/images/local-weather-2.jpg'
import quoteMachineImage from '../../assets/images/quote-machine.jpg';
import colorGameImage from '../../assets/images/color-game.jpg';
import localWeatherImage from '../../assets/images/local-weather.jpg';
import cssOnlyImage from '../../assets/images/css-only.jpg';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class PortfolioPage extends Component {

  render() {
    return(
      <div id="portfolioPage" className="main-content">
        <div className="cc-container-internal">
          <h1>My Work</h1>
          <hr />
          <p>My primary focus is frontend web development and design. I'm passionate about creating beautiful and easy to use websites. I also really enjoy building web applications. Lastly, I do offer maintenance plans as well as backend development. For any of these needs, please <Link className="p-link" to="/contact">get in touch</Link> with me!</p><br />
          <h4>Design & Development</h4>
          <br />
            <div className="my-work">
              <div className="thumbnail item active img-wrap">
                <img id="desktop-khp" src={khpNewImage} alt="screenshot of project" />
                <img id="mobile-khp" src={khpMobileImage} alt="screenshot of project" />
                <div className="img-description">
                  <p className="img-text">Coming Soon!</p>
                </div>
              </div>
              <div className="thumbnail item">
                <a href={oldPortfolioSiteImage} rel="noopener noreferrer" target="_blank"><img src={oldPortfolioImage} alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item ">
                <a href="http://atotalinspection.com/" rel="noopener noreferrer" target="_blank"><img src={atiImage} alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="https://www.howard-developments.com/" rel="noopener noreferrer" target="_blank"><img src={hdImage} alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="/"><img src={newPortfolioImage} rel="noopener noreferrer" alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="https://github.com/jhorner32/local-weather-app" rel="noopener noreferrer" target="_blank"><img src={newWeatherAppImage} alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="https://codepen.io/jhorner32/full/rpRaJO/" rel="noopener noreferrer" target="_blank"><img src={quoteMachineImage}
                    alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="https://codepen.io/jhorner32/full/RxGKmx/" rel="noopener noreferrer" target="_blank"><img src={colorGameImage}
                    alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="https://codepen.io/jhorner32/full/LQZxdJ/" rel="noopener noreferrer" target="_blank"><img src={localWeatherImage}
                    alt="screenshot of project" /></a>
              </div>
              <div className="thumbnail item">
                <a href="https://codepen.io/jhorner32/full/aqPWwO/" rel="noopener noreferrer" target="_blank"><img src={cssOnlyImage} alt="screenshot of project" /></a>
              </div>
            </div>


          <br />
          <br />
          <h4>Skills</h4>
          <p id="skills">react html css css-animations css-grid css-flexbox less javascript jquery php node express mongodb sql json api git modx wordress magento sitefinity</p>
          <div className="cta">
            <Link id="connect" to='/contact'>Get In Touch!</Link>          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;