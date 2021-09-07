import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from './ApiCalls';
import Results from './Results';
const SearchForm = () => {
	const [locations, setLocations] = useState(null);
	const [params, setParams] = useState({
		near: null,
		radius: null,
		query: null,
	});
	const handleChange = (e) => {
		setParams({ ...params, [e.target.id]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await getLocations(params);
		setLocations(res.response.venues);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					id='query'
					placeholder='Company Name'
					onChange={handleChange}></input>
				<input
					id='near'
					required='true'
					placeholder='Location'
					onChange={handleChange}></input>
				<input
					id='radius'
					placeholder='Miles Radius'
					onChange={handleChange}></input>
				<button type='submit'>GO</button>
			</form>
			<Results locations={locations} />
			{locations &&
				locations.map((location) => (
					<div>
						<Link to={`${location.name}/${location.id}`}>{location.name}</Link>
					</div>
				))}
		</div>
	);
};

export default SearchForm;
