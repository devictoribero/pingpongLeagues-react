import React, { Component } from 'react';
import PlayerList from "./Player/PlayerList"
import LeagueList from "./League/LeagueList"
import initJson from "./init.js"


export default class App extends Component {
  constructor() {
		super();
		this.state = initJson;
	}

	render () {
		return (
			<div>
				<PlayerList
					players = {this.state.players}
				/>
				<LeagueList
					leagues = {this.state.leagues}
					players = {this.state.players}/>
			</div>
		);
	}
}
