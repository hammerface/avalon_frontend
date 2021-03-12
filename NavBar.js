import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
	const linkNames = ['Home',   'Play',   'Profile',
		       'Search', 'Login', 'Signup',];

	const links = linkNames.map((link, index) => {
	    return (
		    <li key={index}>
		      <Link to= {'/' + link}
		        className = {this.props.currentPage === link
				    ? 'current-page' : null}>
		        <div>{link}</div>
		      </Link>
		    </li>
	    );
	});

	
	return (
		  <ul className='NavBar'>
		    {links}
	          </ul>
	);
  }
}

export default NavBar;
