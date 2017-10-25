import React, { Component } from 'react';
import glamorous from 'glamorous';
import Avatar from './Avatar'

const CardPlayer = glamorous.div({
	listStyle: 'none',
	marginBottom: 10,
	background: 'white',
	padding: 30,
	marginRight: 5
}, ({ boxShadow = true }) => ({
	boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
}));

const Age = glamorous.span({
	padding: '3px 10px',
	background: 'red',
	borderRadius: 500,
	marginRight: 5,
	fontSize: 15,
	fontWeight: 100,
	color: 'white'
});

const Country = glamorous.span({
	padding: '3px 10px',
	background: 'orange',
	borderRadius: 500,
	marginRight: 5,
	fontSize: 15,
	fontWeight: 100,
	color: 'white'
});

const Team = glamorous.span({
	padding: '3px 10px',
	background: 'red',
	borderRadius: 500,
	marginRight: 5,
	fontSize: 15,
	fontWeight: 100,
	color: 'white'
}, ({ team = 'IT' }) => ({
		backgroundColor: 'blue'
	}));

const NameLastname = glamorous.span({
	color: '#1A1D1F',
	fontWeight: 'bold',
	textAlign: 'center',
	fontSize: 30
});

const Block = glamorous.span({
	display: 'block',
	textAlign: 'center'
}, ({ lastItem = true }) => ({
	marginTop: 10
}));

const PlayerRow = ( props ) => {
	return (
		<CardPlayer department = { props.department } boxShadow = { true }>
			<Block>
				<Avatar avatar = { props.avatar } />
				<NameLastname>
					{ props.firstname + ' ' + props.lastname }
				</NameLastname>
			</Block>

			<Block lastItem = { true } >
				<Age hashtag>{ props.age }</Age>
				<Country hashtag>{ props.country }</Country>
				<Team hashtag team={props.department}>{ props.department }</Team>
			</Block>
		</CardPlayer>
	);
}

export default PlayerRow;
