import React, { Component } from 'react';
import glamorous from 'glamorous';


const LeagueCard = glamorous.li({
	listStyle: 'none',
	marginBottom: 10,
	background: 'white',
	padding: 30,
	marginRight: 5
});

const LeagueHeader = glamorous.span({

});
const CreatedAt = glamorous.span({
	fontWeight: 'light',
	fontStyle: 'italic'
});

const Description = glamorous.span({
	display: 'block',
	lineHeight: '20px'
});
const SeeDetails = glamorous.button({
	border: 'none',
	borderRadius: 5,
	padding: '10px 12px',
	fontSize: 16,
	marginTop: 20,
	color: 'white',
	background: 'linear-gradient(60deg, rgba(46,204,113,1) 0%, rgba(21,173,84,1) 100%)'
});

const LeagueRow = ( props ) => {
	const players = props.players.filter ( standardPlayer => {
		props.info.players.map ( leaguePlayer => {
			if ( leaguePlayer.id == standardPlayer.id ) {
				return standardPlayer;
			}
		});
	});

	return (
		<LeagueCard className = "leagueRow shadow-box">

			<LeagueHeader className = "leagueRow__header">
				<span className="leagueRow__name">
					{ props.name }
				</span>
				<CreatedAt>{ props.info.createdAt }</CreatedAt>
			</LeagueHeader>

			<span className = "leagueRow__body">
				<Description>{ props.info.description }</Description>
				<span className="leagueRow__participants">
					<ul className="leagueRow__participantList">
						<li>participant 1</li>
						<li>participant 2</li>
					</ul>
				</span>
			</span>

			<span className="leagueRow__footer">
				<SeeDetails>Ver detalles</SeeDetails>
			</span>

		</LeagueCard>
	);
}

export default LeagueRow;
