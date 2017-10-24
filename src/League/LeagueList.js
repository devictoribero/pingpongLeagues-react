import React, { Component } from 'react';
import LeagueRow from "./LeagueRow"

const  LeagueList = ( props ) => {
	return (
		<ul className = "leaguesList">

			<header className = "leaguesList__header">
				<h1>Leagues</h1>
			</header>

			<main className = "leaguesList__header">
				{ props.leagues.map( league => {
					return <LeagueRow {...league} players = {props.players}/>
				})}
			</main>

		</ul>
	);
}

export default LeagueList
