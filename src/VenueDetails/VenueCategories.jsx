import React from 'react';

const VenueCategories = ({ categories }) => {
	return (
		<div>
			{categories.map((categorie) => (
				<h1>{categorie.name}</h1>
			))}
		</div>
	);
};

export default VenueCategories;
