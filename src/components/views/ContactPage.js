import React, { Component } from 'react';
import { Link } from '@reach/router';

import '../../styles/styles.css';
import '../../styles/responsive.css';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.addClass = this.addClass.bind(this);
  }

  //adds learn-to-code class if in page link to that webpage is clicked
  addClass() {
    document.body.classList.add('learn-to-code');
  }


  render() {
    return (
      <div id="contact" className="main-content">
        <div className="cc-container-internal">
          <h1>Get In Touch</h1>
          <hr />
          <div className="form-constrain">
            <div className="form-intro">
              <p>If you are interested in any of my web development services or would like to speak about a job offer, please complete the below contact form. I will reach out to you within 48 hours to discuss your submission.</p>
              <p>Want to learn web development but don't know where to start? Another passion of mine is helping people who are interested in coding but don't know how to begin their learning journey. Send me a message or visit my <Link onClick={this.addClass} className="p-link" to='/learn-to-code'>Learn to Code</Link> page to get a few pointers!</p>
              <p className="required-notification">All fields with * are required</p>
            </div>
            <form method="post" name="myemailform" action="../php/form-to-email.php" className="form">
              <div className="row form-list">
                <input required className="remove" type="text" name="name" placeholder="Full Name *" />
                <input required className="remove" type="email" name="email" placeholder="Email *" />
                <input className="remove" type="text" name="referral" placeholder="Referral Source" />
                <textarea required className="form-textarea" type="text" name="message" placeholder="Message *"></textarea>
              </div>
              <input id="submit" type="submit" value="Send" name="submit" />
            </form>
          </div>
        </div>
      </div>
     );
  }
}

export default HomePage;