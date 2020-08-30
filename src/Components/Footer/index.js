import React from 'react';
import ijru from './images/ijru.png';
import amjrf from './images/amjrf.png';
import './style.css';

const Footer = () => {
	return (
		<footer className='footer text-center mt-auto py-3'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<img className='ijruLogo' src={ijru} alt='ijru' />
					</div>
					<div className='col-6'>
						<span className='text-center'>
							&copy;2020 CrashLabs All Rights Reserved
						</span>
					</div>
					<div className='col'>
						<img className='amjrfLogo' src={amjrf} alt='amjrf' />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
