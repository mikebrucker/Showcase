import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="indigo darken-4">
			<h1 className='center white-text'>Mike Brucker</h1>
			<nav className="nav-wrapper indigo darken-4 z-depth-0">
				<ul>
					<li><Link to='/'>About Me</Link></li>
					<li><Link to='/projects'>Projects</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar;