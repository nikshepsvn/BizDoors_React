import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
      <div className = "About-Title">
        <div className="About-header">
          <h2>ABOUT US</h2>
        </div>
        <div className="scalable">
        <iframe src="https://www.youtube.com/embed/UBPFhFhOqM0"></iframe>
        </div>
        <div className="About-content">
          <h2>We are a Business Consulting and Services company located in Bangalore. <br />
              We provide services like Professional Consulting , filming of Video Interviews, and making of Corporate Videos.<br />
              Our goal and vision is to help your brand grow to its fullest potentional and guide you along every step of the way.</h2>
        </div>
       </div>
        <div className="About-navigation">
          <h2><a href="#">HOME</a> | <a href="#">ABOUT US</a> | <a href="#">OUR SERVICES</a> | <a href="#">TEAM</a> | <a href="#">PORTFOLIO</a> | <a href="#">CONTACT</a></h2>
        </div>
      </div>
    );
  }
}

export default About;
