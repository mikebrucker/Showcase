import React from 'react';

const Footer = () => {
	return (
		<footer className="indigo darken-4 white-text center">
			<div>
				<p>&copy; 2018 Mike Brucker</p>
				<p>
					<a href='tel:6103898460'><button className='btn blue-grey darken-3'>Call</button></a>
					<a href='mailto:michael.w.brucker@gmail.com'><button className='btn blue-grey darken-3'>Email</button></a>
					<a href='https://linkedin.com/in/mike-brucker' target="_blank" rel="noopener noreferrer"><button className='btn blue-grey darken-3'>LinkedIn</button></a> 
					<a href='https://github.com/mikebrucker' target="_blank" rel="noopener noreferrer"><button className='btn blue-grey darken-3'>GitHub</button></a>
				</p>
			</div>		
		</footer>
	)
}

export default Footer;