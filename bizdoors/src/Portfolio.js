import React, { Component } from 'react';
import './Portfolio.css';
var Slider = require('react-slick');
var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:true
    };

class Portfolio extends Component {
  render(){
    return (
    <div className="Portfolio">
    <div className="Portfolio-header">
      <h2>PORTFOLIO</h2>
    </div>
    	<div className='container'>
      	<Slider {...settings}>
        	<div><iframe className="iframes" src="https://www.youtube.com/embed/01pZr6w758o"></iframe></div>
          <div><iframe className="iframes" src="https://www.youtube.com/embed/0vYFbKGIhIA"></iframe></div>
          <div><iframe className="iframes" src="https://www.youtube.com/embed/cVZUOnPZzfE"></iframe></div>
          <div><iframe className="iframes" src="https://www.youtube.com/embed/CMw0_y9xnF4"></iframe></div>
        </Slider>
        <h2 className="instructions">PLEASE SWIPE TO CHANGE VIDEOS!</h2>
      </div>
      <div className="Portfolio-navigation">
        <h2><a href="#">HOME</a> | <a href="#">ABOUT US</a> | <a href="#">OUR SERVICES</a> | <a href="#">TEAM</a> | <a href="#">PORTFOLIO</a> | <a href="#">CONTACT</a></h2>
      </div>
    </div>
    );
  }
}

export default Portfolio;
