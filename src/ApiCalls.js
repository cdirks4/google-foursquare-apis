import { useState } from 'react';
export const getLocations = async (params) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/search/?near=${
			params.near && params.near
		}&client_id=Y0GDAYDKVFNLWPYBTNMXR5ITJEDYHPAB3FR00JPWXJC3DYNN&client_secret=ADVMPXTXIGH3OMGO5BRDX2SQHZFUYITCXBI13D1PSC3ZIPPC&v=20210907`
	).then((res) => res.json());
};
export const findVenuePhotos = async (id) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/${id}/photos?&client_id=Y0GDAYDKVFNLWPYBTNMXR5ITJEDYHPAB3FR00JPWXJC3DYNN&client_secret=ADVMPXTXIGH3OMGO5BRDX2SQHZFUYITCXBI13D1PSC3ZIPPC&v=20210907`
	).then((res) => res.json());
};
export const findVenueDetails = async (id) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/${id}?&client_id=Y0GDAYDKVFNLWPYBTNMXR5ITJEDYHPAB3FR00JPWXJC3DYNN&client_secret=ADVMPXTXIGH3OMGO5BRDX2SQHZFUYITCXBI13D1PSC3ZIPPC&v=20210907`
	).then((res) => res.json());
};
