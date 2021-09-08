import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from '../ApiCalls';
import Results from './Results';
import './SearchForm.css';

import SlideShow from './SlideShow';
const SearchForm = () => {
	const [geoLocation, setGeolocation] = useState(null);
	const [locations, setLocations] = useState(null);
	const [params, setParams] = useState({
		near: null,
		radius: null,
		query: null,
	});
	const getUserGeolocationDetails = () => {
		return fetch(
			'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572'
		)
			.then((response) => response.json())
			.then((data) => setGeolocation(data));
	};
	getUserGeolocationDetails();
	const handleChange = (e) => {
		setParams({ ...params, [e.target.id]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await getLocations(params);
		setLocations(res.response.venues);
	};
	return (
		<div className='main-div'>
			<div className='form-div'>
				<form onSubmit={handleSubmit} className='search-form'>
					<input
						className='company-input'
						id='query'
						placeholder='Company Name'
						onChange={handleChange}></input>
					<input
						className='location-input'
						id='near'
						required='true'
						placeholder='Location'
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
			</div>
			{locations ? <Results locations={locations} /> : <SlideShow />}
		</div>
	);
};

export default SearchForm;
