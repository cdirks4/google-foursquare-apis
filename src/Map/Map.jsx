import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import './Map.css';
import { getLocations } from '../ApiCalls';
const Map = ({ geoLocation, center, zoom }) => {
	// const [markers, setMarkers] = useState();

	// const populateMarkers = () => {
	// 	getLocations({ near: geoLocation.city, query: '', radius: 10 }).then(
	// 		(res) => setMarkers(res.response.venues)
	// 	);
	// };
	// useEffect(() => {
	// 	populateMarkers();
	// }, []);

	// const marking = markers.map((marker) => (
	// 	<LocationMarker lat={marker.location.lar} lng={marker.location.lng} />
	// ));
	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_API,
				}}
				defaultCenter={center}
				defaultZoom={zoom}>
				<LocationMarker lat={center.lat} lng={center.lng} />
			</GoogleMapReact>
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
