import React from 'react';
import { Link } from 'react-router-dom';
const VenueCategories = ({ categories }) => {
	return (
		<div>
			{categories.map((categorie) => (
				<Link to={`/categorie/${categorie.id}`}>{categorie.name}</Link>
			))}
		</div>
	);
};

export default VenueCategories;
