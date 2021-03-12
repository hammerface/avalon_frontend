import React from 'react';
import API from './api.js';
export default class Profile extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	              data: '',
	             };
    }
    
    componentDidMount() {
	console.log('entered profile')
	API.get('/profile')
	    .then(res => {
		console.log(res.data)
		this.setState({data: res.data});
	    })
	    .catch(err => {
		console.log(err.status)
	    });
    }
    
    render() {
	return (
		<div>
		  <div>{this.state.data}</div>
		</div>
	);
    }
}

