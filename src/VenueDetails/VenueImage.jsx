import React, { useState } from 'react';
const VenueImage = ({ image }) => {
	return (
		<div className='img'>
			{image && (
				<img
					className='img'
					src={`${image.prefix}${image.height}x${image.width}${image.suffix}`}
					alt=''
					srcset=''
				/>
			)}
		</div>
	);
};

export default VenueImage;
