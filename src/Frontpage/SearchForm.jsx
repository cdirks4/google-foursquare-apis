import Map from '../Map/Map';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Results from './Results';
import './SearchForm.css';
import { getLocations, getLocationsByLongLat } from '../ApiCalls';
import LocationMarker from '../Map/LocationMarker';
const SearchForm = ({ locations, setLocations }) => {
	// const [geoLocation, setGeolocation] = useState(null);
	const [markers, setMarkers] = useState(null);
	const [error, setError] = useState(false);
	const [params, setParams] = useState({
		near: '',
		radius: 5,
		query: '',
	});
	// const getUserGeolocationDetails = () => {
	// 	return fetch(
	// 		'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572'
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => setGeolocation(data));
	// };
	// useEffect(() => {
	// 	if ('geolocation' in navigator) {
	// 		navigator.geolocation.getCurrentPosition(function (position) {
	// 			setGeolocation({
	// 				longitude: position.coords.longitude,
	// 				latitude: position.coords.latitude,
	// 			});
	// 		});
	// 	} else {
	// 		alert('please enable location');
	// 	}
	// }, []);

	const handleChange = (e) => {
		setParams({ ...params, [e.target.id]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// setGeolocation(null);
			const res = await getLocations(params);
			setLocations(res.response.venues);
		} catch (err) {}
	};

	return (
		<div className='main-div'>
			<div className='form-div'>
				<form onSubmit={handleSubmit} className='search-form'>
					<input
						className='company-input'
						id='query'
						placeholder='Keywords (burgers,sports,gyms,etc.)'
						onChange={handleChange}></input>
					<input
						className='location-input'
						id='near'
						required='true'
						placeholder='Location (Boston, MA)'
						onChange={handleChange}></input>
					<select
						className='radius-select'
						name='radius'
						id='radius'
						onChange={handleChange}>
						<option value='5'>5 miles</option>
						<option value='10'>10 miles</option>
						<option value='15'>15 miles</option>
						<option value='20'>20 miles</option>
						<option value='30'>30 miles</option>
						<option value='35'>35 miles</option>
						<option value='40'>40 miles</option>
						<option value='45'>45 miles</option>
						<option value='50'>50 miles</option>
					</select>
					<button type='submit' className='search-submit'>
						GO
					</button>
				</form>
				{locations && (
					<Map
						locations={locations && locations}
						center={
							locations && {
								lat: locations[0].location.lat,
								lng: locations[0].location.lng,
							}
						}
					/>
				)}
			</div>
		</div>
	);
};

export default SearchForm;
