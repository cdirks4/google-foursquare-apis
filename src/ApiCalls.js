export const getLocations = async () => {
	return fetch(
		'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=Y0GDAYDKVFNLWPYBTNMXR5ITJEDYHPAB3FR00JPWXJC3DYNN&client_secret=ADVMPXTXIGH3OMGO5BRDX2SQHZFUYITCXBI13D1PSC3ZIPPC&v=20210907'
	).then((res) => res.json());
};
