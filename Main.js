import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home.js';
import Play from './Play.js';
import Profile from './Profile.js';
import Login from './Login.js';
import Signup from './Signup.js';
import requireAuthentication from './requireAuthentication.js';

export default class Main extends Component {
    render () {
	return (
		<Switch>
		  <Route exact path='/' component={Home}/>
		  <Route exact path='/Home' component={Home}/>
		  <Route exact path='/Play' component={Play}/>
		<Route exact path='/Profile' component={requireAuthentication(Profile)}/>
		  <Route exact path='/Login' component={Login}/>
		  <Route exact path='/Signup' component={Signup}/>
		</Switch>
	);
    }
}
