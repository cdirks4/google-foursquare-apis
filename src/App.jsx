import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getLocations } from './ApiCalls';
import './App.css';
import SearchForm from './SearchForm';
import VenueDetails from './VenueDetails/VenueDetails';

const App = () => {
	useEffect(() => {
		// getLocations().then((res) => console.log(res.response));
	}, []);

	return (
		<div>
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
		</div>
	);
};
export default App;
