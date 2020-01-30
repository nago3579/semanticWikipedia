import React from 'react';
import './wikiTools.css';

class WikiTools extends React.Component{
  render(){
    return(
      <div className = "wikiTools">
      <ul id = "navLeft">
        <li><p>Article</p></li>
        <li><a className = "App-link"
          href = "http://Wikipedia.org"
          >
          Talk
        </a></li>
        <li id = "right">
        <a className = "App-link"
          href = "http://Wikipedia.org"
          >
          View History
        </a>
        </li>
        <li id = "right">
        <a className = "App-link"
          href = "http://Wikipedia.org"
          >
          Edit
        </a>
        </li>
        <li id = "right">
          <p>Read</p>
        </li>
      </ul>
      <nav id = "navRight">
      </nav>
      <div>{this.props.children}</div>
    </div>
    )
  }
}

export default WikiTools;
