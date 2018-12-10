import React from 'react';

const Contact = () => {
	return (
		<section className='contact center'>
			<h4 className='indigo-text text-darken-4'>Contact</h4>
			<p>
				<a href='tel:6103898460'><button className='btn red'>Call</button></a>(610) 389-8460
				<a href='mailto:michael.w.brucker@gmail.com'><button className='btn amber'>Email</button></a>michael.w.brucker@gmail.com
				<a href='https://linkedin.com/in/mike-brucker' target="_blank" rel="noopener noreferrer"><button className='btn blue'>LinkedIn</button></a> 
				<a href='https://github.com/mikebrucker' target="_blank" rel="noopener noreferrer"><button className='btn green'>GitHub</button></a>
			</p>
		</section>
	)
}

export default Contact;