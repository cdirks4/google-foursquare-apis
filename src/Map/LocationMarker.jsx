import React from 'react';
import { MDBIcon } from 'mdbreact';
const LocationMarker = ({ lat, lng, handleClick }) => {
	return (
		<div className='location-marker' onClick={handleClick}>
			<MDBIcon icon='map-marker-alt' size='3x' />
		</div>
	);
};

export default LocationMarker;
