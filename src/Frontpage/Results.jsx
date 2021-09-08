import React from 'react';
import { Link } from 'react-router-dom';
const Results = ({ locations }) => {
	return (
		<div className='result-div'>
			{locations &&
				locations.map((location) => (
					<Link to={`${location.name}/${location.id}`}>{location.name}</Link>
				))}
		</div>
	);
};

export default Results;
