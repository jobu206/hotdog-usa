import React, { Component } from 'react';
import './style.css';

const Contact = () => {
	return (
		<div className='container'>
			<div className='container inner'>
				<h1 className='text-center'>Contact Us</h1>
				<hr />
				<form
					id='contact-form'
					// onSubmit={this.handleSubmit.bind(this)}
					method='POST'
				>
					<div className='form-group'>
						<label for='name' className='font-weight-bold'>
							Name
						</label>
						<input type='text' className='form-control' id='name' />
					</div>
					<div className='form-group'>
						<label for='exampleInputEmail1' className='font-weight-bold'>
							Email address
						</label>
						<input
							type='email'
							className='form-control'
							id='email'
							aria-describedby='emailHelp'
						/>
					</div>
					<div className='form-group'>
						<label for='message' className='font-weight-bold'>
							Message
						</label>
						<textarea className='form-control' rows='5' id='message'></textarea>
					</div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
