import React, { useState } from 'react';

const VenueMenu = ({ menu }) => {
	const [showing, setShowing] = useState(false);
	return (
		<div>
			{!showing && (
				<button
					onClick={() => {
						setShowing(true);
					}}>
					click to view menu
				</button>
			)}
			{showing && (
				<a href={`${menu.url}`} target='_blank' rel='noreferrer'>
					Menu
				</a>
			)}
		</div>
	);
};

export default VenueMenu;
