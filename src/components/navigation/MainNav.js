import React, { Component } from 'react';
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

    if(this.state.urlPath !== windowPath) {
      this.setState({
        activeIndex: index,
        urlPath: window.location.href
      });
      console.log(`the urlPath was updated to ${windowPath} but the instance urlPath is` + this.state.urlPath);
    }
  }

  render(){

    return(
      <div className="collapse navbar-collapse" id="bs-nav-collapse">
       <ul className="nav navbar-nav">

        {/* the below is stating if the active index === the index number it's assigned on click, add the class 'active'. Otherwise, the li will not get a class name. */}
        <li className={this.state.activeIndex===0 ? 'active' : null} onClick={this.toggleClass.bind(this, 0)}><Link className="navitem" to="/">Home</Link></li>
        <li className={this.state.activeIndex===1 ? 'active' : null} onClick={this.toggleClass.bind(this, 1)}><Link className="navitem" to="/about">About</Link></li>
        <li className={this.state.activeIndex===2 ? 'active' : null} onClick={this.toggleClass.bind(this, 2)}><Link className="navitem" to="/portfolio">Portfolio</Link></li>
        <li className={this.state.activeIndex===3 ? 'active' : null} onClick={this.toggleClass.bind(this, 3)}><Link className="navitem" to="/learn-to-code">Learn to Code</Link></li>
        <li className={this.state.activeIndex===4 ? 'active' : null} onClick={this.toggleClass.bind(this, 4)}><Link className="navitem nav-link-contact" to="/contact">Contact</Link></li>

       </ul>
      </div>
    );
  }
}

export default MainNav;