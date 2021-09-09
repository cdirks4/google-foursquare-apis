import React from 'react';

const LocationInfoBox = ({ locations }) => {
	return (
		<div className='location-details'>
			<h2>Event Location info</h2>
			<ul>
				<li>
					Title: <strong>{locations.name}</strong>
				</li>
				<li>
					Address:{' '}
					<strong>{`${locations.address[0]} ${locations.address[1]} ${locations.address[2]}`}</strong>
				</li>
			</ul>
		</div>
	);
};

export default LocationInfoBox;
