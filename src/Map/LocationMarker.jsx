import { Icon } from '@iconify/react';
import React from 'react';

const LocationMarker = ({ lat, lng, handleClick }) => {
	return (
		<div className='location-marker' onClick={handleClick}>
			<Icon icon='bytesize:location' width='32' height='32' />
		</div>
	);
};

export default LocationMarker;
