import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
	return (
		<div className='Header'>
	    	  <img className="logo" src={"images/avalon_logo_nobg.png"}
	            alt="Avalon logo"/>
		</div>
	);
  }
}
