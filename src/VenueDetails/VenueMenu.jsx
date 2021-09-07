import React, { useState } from 'react';

const VenueMenu = ({ menu }) => {
	const [showing, setShowing] = useState(false);
	return (
		<div>
			<button
				onClick={() => {
					setShowing(true);
				}}>
				click to view menu
			</button>
			{showing && <a href={`${menu.url}`}>Menu</a>}
		</div>
	);
};

export default VenueMenu;
