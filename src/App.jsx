import React, { useEffect } from 'react';
import { getLocations } from './ApiCalls';
import SearchForm from './SearchForm';

const App = () => {
	useEffect(() => {
		// getLocations().then((res) => console.log(res.response));
	}, []);

	return (
		<div>
			<SearchForm />
		</div>
	);
};
export default App;
