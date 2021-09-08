import { useState } from 'react';
require('dotenv').config();
export const getLocations = async (params) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/search/?near=${
			params.near && params.near
		}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${
			process.env.REACT_APP_CLIENT_SECRET
		}&v=20210907`
	).then((res) => res.json());
};
export const findVenuePhotos = async (id) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/${id}/photos?&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20210907`
	).then((res) => res.json());
};
export const findVenueDetails = async (id) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/${id}?&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20210907`
	).then((res) => res.json());
};
