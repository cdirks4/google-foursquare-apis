import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SearchForm from './Frontpage/SearchForm';
import VenueDetails from './VenueDetails/VenueDetails';
import Footer from './Footer';
import Map from './Map/Map';
const App = () => {
	useEffect(() => {}, []);

	return (
		<div className='app-div'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<SearchForm />
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
