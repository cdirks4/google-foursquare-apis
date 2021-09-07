import React, { useEffect } from 'react';
import { getLocations } from './ApiCalls';

const App = () => {
	useEffect(() => {
		getLocations().then((res) => console.log(res.response));
	}, []);

	return <div></div>;
};
export default App;
