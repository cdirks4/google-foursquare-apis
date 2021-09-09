import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findVenueDetails } from '../ApiCalls';
import '../App.css';
import VenueCategories from './VenueCategories';
import VenueImage from './VenueImage';
import VenueMenu from './VenueMenu';
import './VenueDetails.css';
import { MDBIcon } from 'mdbreact';
import Map from '../Map/Map';
const VenueDetails = () => {
	const [venue, setVenue] = useState();
	const params = useParams();
	useEffect(() => {
		findVenueDetails(params.id).then((res) => setVenue(res.response.venue));
	}, []);
	return venue ? (
		<div className='details-div'>
			{venue.bestPhoto ? (
				<VenueImage image={venue.bestPhoto} />
			) : (
				<h1>No photos available, Sorry for the inconvinence</h1>
			)}
			<hr />
			<div className='small-div'>
				<MDBIcon icon='thumbs-up' className='likes-logo' size='2x' />
				{venue.likes.count && <p className='likes'>{venue.likes.count}</p>}
				<p className='price'>Price: {venue.price.currency}</p>
				<p className='rating'>Rating: {venue.rating}</p>
				<p>{venue.defaultHours}</p>
			</div>
			{venue.hasMenu && <VenueMenu menu={venue.menu} />}
			{venue.categories && <VenueCategories categories={venue.categories} />}
			{venue.description ? (
				<p className='venue-description'>{venue.description}</p>
			) : (
				<p className='venue-description'>
					{venue.name} did not provide a description
				</p>
			)}
		</div>
	) : (
		<div> loading</div>
	);
};

export default VenueDetails;
