import React, { Component } from 'react';
import { URL_AVATAR } from './Variables/common'

const PlayerRow = ( props ) => {
	return (
		<li className = {`playerRow shadow-box ${departmentClass}`}>

			<span className = "playerRow__header">
				<figure className ="playerRow__avatarWrapper">
					<img className="playerRow__avatar" src={ URL_AVATAR } />
				</figure>
				<span className="playerRow__name">
					{ props.firstname + ' ' + props.lastname }
				</span>
			</span>

			<span className="playerRow__footer">
				<span className = "playerRow__age">
					{ props.age }
				</span>
				<span className = "playerRow__country">
					{ props.country }
				</span>
				<span className = "playerRow__team">
					{ props.department }
				</span>
			</span>

		</li>
	);

	function getDepartmentClass( department ) {
		if ( department == 'IT' ) {
			return 'playerRow--IT';
		}
		/*if ( department == DEPARTMENT.MARKETING ) {
			return 'playerRow--MARKETING';
		}
		if ( department == DEPARTMENT.DESIGN ) {
			return 'playerRow--DESIGN';
		}
		if ( department == DEPARTMENT.ECONOMIC ) {
			return 'playerRow--ECONOMIC';
		}*/
	}
	const departmentClass = getDepartmentClass(props.department);
}

export default PlayerRow;
