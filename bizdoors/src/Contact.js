import React, { Component } from 'react';
import './Contact.css';
var FontAwesome = require('react-fontawesome');

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <div className = "Contact-Title">
        <div className="Contact-header">
          <h2>We would love to hear from you!</h2>
        </div>
      </div>
      <div className="Contact-Form">
      <form action="https://formspree.io/contact@bizdoors.com" method="POST">
        <h1 className="FormInfo">NAME </h1> <input type="text" name="name"/> <br />
        <h1 className="FormInfo">MESSAGE </h1> <input type="comment" name="_replyto"  id="comment" /><br />
        <br /><input className="FormButton" type="submit" value="Send" />
      </form>
      </div>
      <div className="Icons">
        <a id="contactico" href ="https://youtube.com/BizDoors"> <FontAwesome name='youtube-play' /> </a>
        <a id="contactico" href ="https://facebook.com/BizDoors">  <FontAwesome name='facebook-square' /> </a>
        <a id="contactico" href ="mailto:contact@BizDoors.com"><FontAwesome name='envelope-o' /> </a>
      </div>
        <div className="Contact-navigation">
          <h2><a href="#">HOME</a> | <a href="#">ABOUT US</a> | <a href="#">OUR SERVICES</a> | <a href="#">TEAM</a> | <a href="#">PORTFOLIO</a> | <a href="#">CONTACT</a></h2>
        </div>
      </div>
    );
  }
}

export default Contact;
