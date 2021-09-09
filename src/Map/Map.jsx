import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import './Map.css';

const Map = ({ locations, center, zoom }) => {
	const [locationInfo, setLocationInfo] = useState(null);

	const markers =
		locations &&
		locations.map((location) => (
			<LocationMarker
				lat={location.location.lat}
				lng={location.location.lng}
				handleClick={() =>
					setLocationInfo({
						name: location.name,
						address: location.location.formattedAddress,
						id: location.id,
						price: '',
					})
				}
			/>
		));

	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_API,
				}}
				defaultCenter={center}
				defaultZoom={zoom}>
				<LocationMarker lat={center.lat} lng={center.lng} />
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox locations={locationInfo} />}
		</div>
	);
};
Map.defaultProps = {
	zoom: 14,
};

export default Map;
