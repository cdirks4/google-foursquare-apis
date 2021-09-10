import React from 'react';
import { Link } from 'react-router-dom';
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
					<strong>{`${locations.address[0]} ${locations.address[1]} ${
						locations.address[2] && locations.address[2]
					}`}</strong>
				</li>
				{/* <Link to={`${locations.name}/${locations.id}`}>
					<li>More Details</li>
				</Link> */}
			</ul>
		</div>
	);
};

export default LocationInfoBox;
