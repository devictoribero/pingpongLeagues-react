import React, { Component } from 'react';
import PlayerRow from "./PlayerRow"

const PlayerList = ( props ) => {
	return (
		<ul className = "playerList">

			<header className = "playerList__header">
				<h1>Players</h1>
			</header>

			<main className = "playerList__header">
				{ props.players.map( player => {
					return <PlayerRow {...player}/>
				})}
			</main>

		</ul>
	);
};

export default PlayerList;
