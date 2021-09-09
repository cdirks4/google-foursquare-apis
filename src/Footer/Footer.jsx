import React from 'react';
import { MDBIcon } from 'mdbreact';
import './Footer.css';
const Footer = () => {
	return (
		<footer className='footer'>
			<a
				href='https://github.com/cdirks4/google-foursquare-apis'
				target='_blank'
				rel='noopener noreferrer'
				className='github'>
				<MDBIcon fab icon='github' className='github' size='3x' />
			</a>
			<a
				href='https://www.linkedin.com/in/connor-dirks-61333b201/'
				target='_blank'
				rel='noopener noreferrer'>
				<MDBIcon fab icon='linkedin' className='linkedin' size='3x' />
			</a>
		</footer>
	);
};

export default Footer;
