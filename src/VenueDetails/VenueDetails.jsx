import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findVenueDetails } from '../ApiCalls';
import '../App.css';
import VenueCategories from './VenueCategories';
import VenueImage from './VenueImage';
import VenueMenu from './VenueMenu';
// response:
// venue:
// allowMenuUrlEdit: true
// attributes: {groups: Array(5)}
// beenHere: {count: 0, unconfirmedCount: 0, marked: false, lastCheckinExpiredAt: 0}
// bestPhoto: {id: "50a834efe4b041c065a204cb", createdAt: 1353200879, source: {…}, prefix: "https://fastly.4sqi.net/img/general/", suffix: "/2170690_iBDyH5oDNU4K6qgHPiOi7nxjda5XBk0A-tbR237NxI0.jpg", …}
// canonicalUrl: "https://foursquare.com/v/ruths-chris-steak-house/525da4dd498eb92d634abc6f"
// categories: (3) [{…}, {…}, {…}]
// colors: {highlightColor: {…}, highlightTextColor: {…}, algoVersion: 3}
// contact: {phone: "6177428401", formattedPhone: "(617) 742-8401", twitter: "rcshboston", facebook: "170345166757", facebookUsername: "RuthsChrisSteakHouseBoston", …}
// createdAt: 1381868765
// defaultHours: {status: "Open until 9:00 PM", richStatus: {…}, isOpen: true, isLocalHoliday: false, dayData: Array(0), …}
// delivery: {id: "1448909", url: "https://www.grubhub.com/restaurant/ruths-chris-ste…m=affiliate&utm_campaign=1131&utm_content=1448909", provider: {…}}
// description: "The Ruth's Chris Steak House legacy began when Ruth Fertel mortgaged her home for $22,000 to purchase the \"Chris Steak House,\" a 60-seat restaurant located in New Orleans, Louisiana. More than 40 years later, our success continues to be driven by our adherence to Ruth's core values, which are to ..."
// dislike: false
// hasMenu: true
// hereNow: {count: 0, summary: "Nobody here", groups: Array(0)}
// hours: {status: "Open until 9:00 PM", richStatus: {…}, isOpen: true, isLocalHoliday: false, dayData: Array(0), …}
// id: "525da4dd498eb92d634abc6f"
// inbox: {count: 0, items: Array(0)}
// likes: {count: 157, groups: Array(1), summary: "157 Likes"}
// listed: {count: 75, groups: Array(1)}
// location: {address: "45 School Street", crossStreet: "btwn Chapman & City Hall", lat: 42.358125, lng: -71.059337, labeledLatLngs: Array(1), …}
// menu: {type: "Menu", label: "Menu", anchor: "View Menu", url: "https://www.ruthschris.com/menu/dinner/", mobileUrl: "https://www.ruthschris.com/menu/dinner/", …}
// name: "Ruth's Chris Steak House"
// ok: false
// page: {pageInfo: {…}, user: {…}}
// pageUpdates: {count: 0, items: Array(0)}
// photos: {count: 243, groups: Array(1)}
// popular: {status: "Likely open", richStatus: {…}, isOpen: true, isLocalHoliday: false, timeframes: Array(7)}
// price: {tier: 4, message: "Very Expensive", currency: "$"}
// rating: 8.7
// ratingColor: "73CF42"
// ratingSignals: 212
// reasons: {count: 1, items: Array(1)}
// seasonalHours: [{…}]
// shortUrl: "http://4sq.com/1bV3r3M"
// specials: {count: 0, items: Array(0)}
// stats: {tipCount: 45}
// storeId: "4999"
// timeZone: "America/New_York"
// tips: {count: 45, groups: Array(1)}
// url: "http://www.ruthschris.com"

const VenueDetails = () => {
	const [venue, setVenue] = useState(null);
	const params = useParams();
	useEffect(() => {
		findVenueDetails(params.id).then((res) => setVenue(res.response.venue));
	}, []);
	return (
		venue && (
			<div>
				{venue.bestPhoto && <VenueImage image={venue.bestPhoto} />}
				<p>{venue.likes.count}</p>
				{venue.hasMenu && <VenueMenu menu={venue.menu} />}
				{venue.categories && <VenueCategories categories={venue.categories} />}
			</div>
		)
	);
};

export default VenueDetails;
