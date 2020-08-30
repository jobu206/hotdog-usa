import React from 'react';
import data from './data';
import './style.css';

const Coaches = () => {
	return (
		<div className='container'>
			<h1 className='text-center mt-5'>Coaches</h1>
			<hr />
			<div className='row coaches'>
				{data.coaches.map((coach) => (
					<div className='col-4' key={coach.image}>
						<img src={coach.image} alt={coach.altText} />
						<p>{coach.bio}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Coaches;
