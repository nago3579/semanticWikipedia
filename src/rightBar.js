import React from 'react';
import './rightBar.css';
import jelly from './Turritopsis_dohrnii.jpg';

class RightBar extends React.Component{
  render(){
    return(
      <div className = "rightBar">
        <p className = "infoBox"><b>Immortal Jellyfish&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></p>
        <img id="jelly" src={jelly} alt = "jelly" />
        <p><i>Turritopsis dohrnii medusa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></p>
          <a className = "App-link"
            href = "http://Wikipedia.org"
            >
            Scientific classification&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
         <p className = "infoBox">Kingdom:	Animalia</p>
         <p className = "infoBox">Phylum:	Cnidaria</p>
         <p className = "infoBox">Class:	Hydrozoa</p>
         <p className = "infoBox">Order:	Anthoathecata</p>
         <p className = "infoBox">Family:	Oceaniidae</p>
         <p className = "infoBox">Genus:	Turritopsis</p>
         <p className = "infoBox">Species:	T. dohrnii</p>
         <a className = "App-link"
           href = "http://Wikipedia.org"
           >
           Binomial name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </a>
         <p className = "infoBox"><b>Turritopsis dohrnii&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></p>
         <p className = "infoBox">(Weismann, 1883)&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default RightBar;
