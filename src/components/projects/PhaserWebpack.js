import React from 'react';
import Projectnav from '../Projectnav';
import phasertemplate from '../../images/phaser-template.png';

const PhaserWebpack = () => {
	return (
		<section className='project'>
			<Projectnav />
			<h5>Phaser3 template made in webpack</h5>
			<a href="https://phaser3-template.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><button className='btn green accent-4'>Live</button></a>
			<a href="https://github.com/mikebrucker/phaser3-webpack" target="_blank" rel="noopener noreferrer"><button className='btn purple accent-4'>GitHub Repo</button></a>
			<ul>
				<li>Development template for the creation <a href="https://github.com/photonstorm/phaser" target="_blank" rel="noopener noreferrer">Phaser3</a> games.</li>
				<li>I created this to take a more modern approach to the games I made with Phaser3. It is easy to spin up new games using this template.</li>
				<li>Just clone the repo and edit the files, add new scenes, sprites, etc.</li>
				<li>'Game' resembles those old dvd players with the bouncing logo on screen.</li>
			</ul>
			<img src={phasertemplate} alt="Phaser3 Template" />
		</section>
	)
}

export default PhaserWebpack;