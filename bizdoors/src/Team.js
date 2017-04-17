import React, { Component } from 'react';
import mem1 from '../media/shalini.jpg';
import mem2 from '../media/prithvi.jpg';
import './Team.css';


class Team extends Component {
  render() {
    return (
      <div className="Team">
      <div className = "Team-Title">
        <div className="Team-header">
          <h2>OUR TEAM</h2>
        </div>
      </div>
      <div className="Team-Info">
      <div className="Team-Member">
      <div>
        <img className="Team-Pic" src ={mem1} />
        <p> Shalini </p>
        <p className = "teamdesc" > Founder and CEO </p>
      </div>
      </div>
      <div className="Team-Member">
      <div>
        <img className="Team-Pic" src ={mem2} />
        <p> Prithvi </p>
        <p className = "teamdesc"> CTO </p>
      </div>
      </div>
      </div>
        <div className="Team-navigation">
          <h2><a href="#">HOME</a> | <a href="#">ABOUT US</a> | <a href="#">OUR SERVICES</a> | <a href="#">TEAM</a> | <a href="#">PORTFOLIO</a> | <a href="#">CONTACT</a></h2>
        </div>
      </div>
    );
  }
}

export default Team;
