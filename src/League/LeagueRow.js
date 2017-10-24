import React, { Component } from 'react';


const LeagueRow = ( props ) => {

	const players = props.players.filter ( standardPlayer => {
		props.info.players.map ( leaguePlayer => {
			if ( leaguePlayer.id == standardPlayer.id ) {
				return standardPlayer;
			}
		});
	});

	return (
		<li className = "leagueRow shadow-box">

			<span className = "leagueRow__header">
				<span className="leagueRow__name">
					{ props.name }
				</span>
				<span className="leagueRow__createdAt">
					{ props.info.createdAt }
				</span>
			</span>

			<span className = "leagueRow__body">
				<span className="leagueRow__description">
					{ props.info.description }
				</span>
				<span className="leagueRow__participants">
					<ul className="leagueRow__participantList">
						<li>participant 1</li>
						<li>participant 2</li>
					</ul>
				</span>
			</span>

			<span className="leagueRow__footer">
				<button type="button" className="leagueRow__seeDetails">
					Ver detalles
				</button>
			</span>

		</li>
	);
}

export default LeagueRow;
