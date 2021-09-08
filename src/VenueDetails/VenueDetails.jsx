import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findVenueDetails } from '../ApiCalls';
import '../App.css';
import VenueCategories from './VenueCategories';
import VenueImage from './VenueImage';
import VenueMenu from './VenueMenu';
import './VenueDetails.css';
import likes from '../images/like_PNG87.png';
const VenueDetails = () => {
	const [venue, setVenue] = useState(null);
	const params = useParams();
	useEffect(() => {
		findVenueDetails(params.id).then((res) => setVenue(res.response.venue));
	}, []);
	return (
		venue && (
			<div className='details-div'>
				{venue.bestPhoto ? (
					<VenueImage image={venue.bestPhoto} />
				) : (
					<h1>No photos available, Sorry for the inconvinence</h1>
				)}
				<div className='likes-div'>
					<p>{venue.likes.count}</p>
					<img src={likes} className='likes' />
				</div>
				{venue.hasMenu && <VenueMenu menu={venue.menu} />}
				{venue.categories && <VenueCategories categories={venue.categories} />}
				<p className='venue-description'>{venue.description}</p>
			</div>
		)
	);
};

export default VenueDetails;
