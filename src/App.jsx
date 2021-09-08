import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getLocations } from './ApiCalls';
import './App.css';
import Header from './Header/Header';
import SearchForm from './Frontpage/SearchForm';
import VenueDetails from './VenueDetails/VenueDetails';
import Footer from './Footer';

const App = () => {
	useEffect(() => {
		// getLocations().then((res) => console.log(res.response));
	}, []);
	let map;

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
