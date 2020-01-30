import React from 'react';
import SideBar from './sideBar.js';
import WikiTools from './wikiTools.js';
import Article from './Article.js';
import RightBar from './rightBar.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <SideBar />
      <header className="top-bar">
        <p id="line">Not logged in&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className = "App-link"
          href = "http://Wikipedia.org"
          >
          Talk&nbsp;&nbsp;&nbsp;&nbsp;Contributions&nbsp;&nbsp;&nbsp;&nbsp;Create account&nbsp;&nbsp;&nbsp;&nbsp;Log in
        </a>
        <WikiTools/>
        <Article/>
        <RightBar/>
      </header>
    </div>
  );
}

export default App;
