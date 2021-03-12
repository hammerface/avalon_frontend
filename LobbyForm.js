import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './LobbyForm.css';
import API from './api.js'

class LobbyForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    name: '',
	    password: '',
	    max_players: 10
	};

	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
	const name = event.target.name
	this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {
	let data = {
	    'name': this.state.name,
	    'password': this.state.password,
	    'max_players': this.state.max_players
	}

	API.post('/makeLobby', data)
	    .then((res) => {
		console.log(res.data.lobby_id)
		this.props.history.push('/Lobby/' + res.data.lobby_id);
	    })
	    .catch((error) => {
	    })
	event.preventDefault();
    }

    render() {
	return (
	  <form onSubmit={this.handleSubmit}>
	    <label>
	      Lobby Name:
	      <input type="text" id="name" name="name" maxLength="80"
	       value={this.state.name} onChange={this.handleInputChange} />
	    </label>

	    <label>
	      Lobby Password:
	      <input type="text" name="password" maxLength="80"
	        value={this.state.password} onChange={this.handleInputChange} />
            </label>

	    <label>
	      Player Limit:
	      <input type="range" name="max_players" min="5" max="10"
	        value={this.state.max_players}
	        onChange={this.handleInputChange} />
	      {this.state.max_players}
	    </label>

	    <input type="submit" value="Create Lobby" />
	  </form>
	)
    }
}

export default withRouter(LobbyForm)
