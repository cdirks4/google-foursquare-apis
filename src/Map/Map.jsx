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
	center: {
		lat: 42.3265,
		lng: -122.8756,
	},
	zoom: 10,
};

export default Map;
