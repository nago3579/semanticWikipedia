import React from 'react';
import './sideBar.css';
import wikipedialogo from './wikipedia-logo.jpg';

class SideBar extends React.Component{
  render(){
    return(
      <div className = "sideBar">
        <img id="wikiLogo" src={wikipedialogo} alt = "wikipedialogo" />
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Main page
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Contents
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Featured content
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Current events
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Random article
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Donate to Wikipedia
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Wikipedia store
        </a>
        <div id="breakWiki">
          <p>Interaction</p>
          <hr className = "sideh"></hr>
        </div>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Help
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          About Wikipedia
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Community portal
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Recent changes
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Contact page
        </a>
        <div id="breakWiki">
          <p>Tools</p>
          <hr className = "sideh"></hr>
        </div>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          What links here
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Related changes
        </a>
        <a className = "app-link"
          href = "http://Wikipedia.org"
          >
          Upload file
        </a>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default SideBar;
