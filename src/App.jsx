import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SearchForm from './Frontpage/SearchForm';
import VenueDetails from './VenueDetails/VenueDetails';
import Footer from './Footer/Footer';
import Map from './Map/Map';
const App = () => {
	useEffect(() => {}, []);
	const [locations, setLocations] = useState(null);
	return (
		<div className='app-div'>
			<Header setLocations={setLocations} />
			<Switch>
				<Route exact path='/'>
					<SearchForm locations={locations} setLocations={setLocations} />
				</Route>
			</Switch>
			<Switch>
				<Route exact path='/:name/:id'>
					<VenueDetails />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};
export default App;
