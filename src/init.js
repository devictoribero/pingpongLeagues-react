import { DEPARTMENTS, COUNTRIES, PLAYERS_ID, URL_AVATAR } from "./Variables/common"

const initJson = {
	players: [
		{
			id: PLAYERS_ID.VICTOR,
			firstname: 'Victor',
			lastname: 'Ribero',
			avatar: URL_AVATAR,
			age: 24,
			country: COUNTRY_SPAIN,
			department: DEPARTMENT_IT
		},
		{
			id: PLAYERS_ID.KEVIN,
			firstname: 'Kevin',
			lastname: 'Callejas',
			avatar: URL_AVATAR,
			age: 24,
			country: COUNTRIES.COLOMBIA,
			department: DEPARTMENTS.IT,
		}
	],
	leagues: [
		{
			id: 1,
			name: 'Champions league',
			info: {
				createdAt: '01/10/2017',
				description: 'Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at. Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.',
				players: [
						PLAYERS_ID.VICTOR,
					 	PLAYERS_ID.KEVIN
				],
			},
			ranking: [
				{
					person: PLAYERS_ID.VICTOR,
					wins: 1,
					loses: 0,
				},
				{
					person: PLAYERS_ID.KEVIN,
					wins: 0,
					loses: 1,
				}
			],
			matches: [
				{
					date: '19/09/2017',
					players: [
						PLAYERS_ID.VICTOR,
						PLAYERS_ID.KEVIN
					],
					puntuation: [
						{
							PLAYERS_ID.VICTOR: 23
						},
						{
							PLAYERS_ID.KEVIN: 21
						}
					]
				},
				{
					date: '19/09/2017',
					players: [
						PLAYERS_ID.VICTOR,
						PLAYERS_ID.KEVIN
					],
					puntuation: [
						{
							PLAYERS_ID.VICTOR: 23
						},
						{
							PLAYERS_ID.KEVIN: 21
						}
					]
				}
			]
		}
	]
};
