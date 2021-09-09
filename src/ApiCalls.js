export const getLocations = async (params) => {
	return fetch(
		`https://api.foursquare.com/v2/venues/search/?near=${
			params.near && params.near
		}&query=${params.query && params.query}&radius=${
			params.radius && params.radius * 1609.34
		}&limit=10&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${
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
