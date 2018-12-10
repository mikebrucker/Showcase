import React from 'react';
import Projectnav from '../Projectnav';
import rostered from '../../images/rostered.png'

const Rostered = () => {
	return (
		<section className='project'>
			<Projectnav />
			<h5>Team Roster app built in React and Firebase</h5>
			<a href="https://rostered-mwb.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><button className='btn green accent-4'>Live</button></a>
			<a href="https://github.com/mikebrucker/Rostered" target="_blank" rel="noopener noreferrer"><button className='btn purple accent-4'>GitHub Repo</button></a>
			<ul>
				<li>Features full CRUD functionality (create, read, update, destroy).</li>
				<li>Log in and out features.</li>
				<li>Create a team and add players to it.</li>
				<li>Players are unique to the team they are created for and teams are unique to the logged in user.</li>
				<li>Utilizes React framework and Firebase as back-end for data storage.</li>
			</ul>
			<img src={rostered} alt="Rostered App" />
		</section>
	)
}

export default Rostered;