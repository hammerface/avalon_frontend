import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header.js'
import NavBar from './NavBar.js'
import Main from './Main.js'
import './App.css';
import API from './api.js'
import { connect } from 'react-redux'
import { doLogin } from './actions/login'


class App extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    currentPage: 'Home',
	};
    }

    // going to check loggedIn status on load by calling flask check
    // set loggedIn to true if success, else false
    componentDidMount() {
	// status 200 on logged in, 401 on not logged in
	API.get('/check')
	    .then(res => {
		console.log('currently logged in')
		this.props.doLogin()
//		console.log(status)
		
	    })
	    .catch(err => {
		console.log('currently logged out')
//		console.log(err)
	    });
    }
    
  render() {
      return (
	      <Router>
	        <div className="App">
	          <div className="main-container">
	            <header>
	              <Header />
	            </header>
	            <nav>
	              <NavBar currentPage={this.state.currentPage}/>
	            </nav>
	            <main>
	              <Main />
	            </main>
	            <footer>
	              FOOTER
	            </footer>
	          </div>
	        </div>
	      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    doLogin: () => dispatch(doLogin())
})

export default connect(null, mapDispatchToProps)(App);
