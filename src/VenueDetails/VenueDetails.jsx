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
	const [venue, setVenue] = useState(null);
	const params = useParams();
	useEffect(() => {
		findVenueDetails(params.id).then((res) => setVenue(res.response));
	}, []);
	return venue ? (
		<div className='details-div'>
			{venue.venue.bestPhoto ? (
				<VenueImage image={venue.venue.bestPhoto} />
			) : (
				<h1>No photos available, Sorry for the inconvinence</h1>
			)}
			<hr />
			<div className='small-div'>
				<MDBIcon icon='thumbs-up' className='likes-logo' size='2x' />
				{venue?.likes?.count && (
					<p className='likes'>{venue.venue.likes?.count}</p>
				)}
				<p className='price'>Price: {venue.venue.price?.currency}</p>
				<p className='rating'>Rating: {venue.venue.rating}</p>
				<p>{venue?.defaultHours}</p>
			</div>
			{venue.venue?.hasMenu && <VenueMenu menu={venue.venue.menu} />}
			{venue.venue?.categories && (
				<VenueCategories categories={venue.venue.categories} />
			)}
			{venue.description ? (
				<p className='venue-description'>{venue.description}</p>
			) : (
				<p className='venue-description'>
					{venue.name} did not provide a description
				</p>
			)}
			<h1>{venue.venue.name}</h1>
			<h1>Still neeeds to be worked on</h1>
		</div>
	) : (
		<div> loading</div>
	);
};

export default VenueDetails;
