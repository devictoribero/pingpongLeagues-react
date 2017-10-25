import React, { Component } from 'react';
import glamorous from 'glamorous';
import PlayerRow from "./PlayerRow"

const PlayerCardList = glamorous.main({
	margin: 0,
	display: 'flex',
	alignItems: 'flex-start',
	flexWrap: 'wrap'
});

const PlayerList = ( props ) => {
	return (
		<ul className = "playerList">

			<header className = "playerList__header">
				<h1>Players</h1>
			</header>

			<PlayerCardList>
				{ props.players.map( ( player, i ) => {
					return <PlayerRow key = {i} {...player}/>
				})}
			</PlayerCardList>

		</ul>
	);
};

export default PlayerList;
