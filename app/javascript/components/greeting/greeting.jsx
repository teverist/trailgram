import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
    <nav className="header-nav">

      <nav className="left-nav">
        <a href="#" className="header-logo">Trailgram</a>
      </nav>

      <nav className="header-button right-nav">
        <Link to="/login" id="splash-login-button">
          LOG IN
        </Link>
      </nav>

    </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-nav">
    <nav className="left-nav">
        <h1 className="header-logo">
          <a href="#">Trailgram</a>
        </h1>
  
        <ul>
          <li id="activities-btn">
            <Link to="/activities">My Activities</Link>
          </li>
          <li id="routes-btn">
            <Link to="/routes">My Routes</Link>
          </li>
        </ul>
    </nav>
    
    <nav className="right-nav">
      <ul>
         {/* <li id="user-information">
        <ul> */}
        <li>
          <h2 className="header-name">Hi, {currentUser.firstName}</h2>
        </li>
        <li>
          <a href="" id="user-dropdown-btn">
            <div className="user-nav-avatar">
              <i class="material-icons md-36">account_circle</i>
            </div>
            <div className="nav-avatar-chevron">
              <i class="material-icons md-18">keyboard_arrow_down</i>
            </div>
          </a>
        </li>
        {/* </ul>
        </li> */}
        <li>
          <a href="">
            <div>
              <i class="material-icons md-24">add_circle_outline</i>
            </div>
          </a>
        </li>
        <li>
          <button className="header-button" onClick={logout}>Log out</button>
        </li>
      </ul>
    </nav>
    
    <button className="header-button" onClick={logout}>Log out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;