import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './LobbyForm.css';
import API from './api.js'
import LobbyForm from './LobbyForm.js'
class Play extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    formDisplay: false,
	    lobbies: null
	}
	this.handleShowPress = this.handleShowPress.bind(this);
	this.getLobbyList = this.getLobbyList.bind(this);
    }

    componentDidMount() {
	console.log('entered play');
	this.getLobbyList();
	this.timer = setInterval(()=> this.getLobbyList(), 10000);
    }

    componentWillUnmount() {
	console.log("clearing timer");
	clearInterval(this.timer);
    }

    async getLobbyList() {		
	API.get('lobbyList')
	    .then(res => {
		this.setState({lobbies: res.data});
	    })
	    .catch(err => {
		console.log(err.status)
	    });
    }


    handleShowPress() {
	this.setState({formDisplay: !this.state.formDisplay});
    }
    
    render() {
	const formDisplay = this.state.formDisplay

	const lobbies = this.state.lobbies===null ? null : this.state.lobbies.map((lobby, index) => {
	    return (
		    <li key={index}>
		      <Link to= {'/Lobby/' + lobby.id}>
		        {lobby.name}
		      </Link>
		      {lobby.current_players}/{lobby.max_players}
		    </li>
	    )
	});


	
	return (
	  <div>
		<div>Play</div>
		<ul>{lobbies}</ul>
	    <button type="button" onClick={this.handleShowPress}>
     		Make New Lobby
	    </button>
		{
		    formDisplay ? <LobbyForm/> : null
		}

          </div>
	)
    }
}


export default Play;
