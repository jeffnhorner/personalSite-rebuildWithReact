import React, { Component } from 'react';
import { Router } from '@reach/router';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import PortfolioPage from '../views/PortfolioPage';
import LearnToCodePage from '../views/LearnToCodePage';
import ContactPage from '../views/ContactPage';

import MobileNav from './MobileNav';
import MainNav from './MainNav';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class NavContainer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-default">
          <div className="container nav-container">
            <MobileNav />
            <MainNav />
          </div>
        </nav>

        {/* router defined and called here so the router tabindex renders outside of the navigation container */}
        <Router className="reach-router">
          <Home path="/" />
          <About path ="about" />
          <Portfolio path="/portfolio" />
          <LearnToCode path="/learn-to-code" />
          <Contact path="/contact" />
        </Router>
      </div>
   );
  }
}

const Home = () => (
  <HomePage />
);

const About = () => (
  <AboutPage />
);

const Portfolio = () => (
  <PortfolioPage />
);

const LearnToCode = () => (
  <LearnToCodePage />
);

const Contact = () => ( 
 <ContactPage / >
);

export default NavContainer;