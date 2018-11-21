import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class MainNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeItem: 'home',
      urlPath: window.location.href
    }
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const updateActiveItem = nextProps.activeItem && nextProps.activeItem !== this.state.activeItem

    if (updateActiveItem) {
      this.setState({ activeItem: nextProps.activeItem })
    }
  }

  // sets the state of the li active index to the index number it's assigned
  toggleClass = (index, e) => {
    e.preventDefault();
    const windowPath = window.location.href;
    this.setState({
      activeIndex: index
    })

    //when using the navigation links, this adds a unique class to the learn-to-code webapge if the window.location.href equals the learn-to-code webpage path. This way, the styling can be controlled from the body tag level.
    if (window.location.href === 'http://localhost:3000/learn-to-code') {
      console.log('learn-to-code');
      document.body.classList.add('learn-to-code');
    } else {
      document.body.classList.remove('learn-to-code');
    }
  }

  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this);
    setTimeout(function () {
      el.classList.remove("in");
    }, 0);
  }

  render(){

    return(
      <div className="collapse navbar-collapse" id="bs-nav-collapse">
       <ul className="nav navbar-nav">

        {/* the below is stating if the active index === the index number it's assigned on click, add the class 'active'. Otherwise, the li will not get a class name. */}
        <li activeClassName="active" onClick={this.toggleClass.bind(this, 0)}><Link className="navitem" to="/">Home</Link></li>
        <li activeClassName="active" onClick={this.toggleClass.bind(this, 1)}><Link className="navitem" to="/about">About</Link></li>
        <li activeClassName="active" onClick={this.toggleClass.bind(this, 2)}><Link className="navitem" to="/portfolio">Portfolio</Link></li>
        <li activeClassName="active" onClick={this.toggleClass.bind(this, 3)}><Link className="navitem" to="/learn-to-code">Learn to Code</Link></li>
        <li activeClassName="active" onClick={this.toggleClass.bind(this, 4)}><Link className="navitem nav-link-contact" to="/contact">Contact</Link></li>

       </ul>
      </div>
    );
  }
}

export default MainNav;