import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ setLocations }) => {
	return (
		<div className='header-div'>
			<Link to='/'>
				<header onClick={() => setLocations(null)}>Locals Only</header>
			</Link>
		</div>
	);
};

export default Header;
