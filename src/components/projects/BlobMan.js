import React from 'react';
import Projectnav from '../Projectnav';
import blobman from '../../images/blob-man.png';

const BlobMan = () => {
	return (
		<section className='project'>
			<Projectnav />
			<h5>Blob-Man (Pac-Man style game) made with the <a href="https://github.com/photonstorm/phaser" target="_blank" rel="noopener noreferrer">Phaser3</a> library</h5>
			<a href="https://blob-man.mikebrucker.com" target="_blank" rel="noopener noreferrer"><button className='btn green accent-4'>Play</button></a>
			<a href="https://github.com/mikebrucker/Blob-Man" target="_blank" rel="noopener noreferrer"><button className='btn purple accent-4'>GitHub Repo</button></a>
			<ul>
				<li>Pac-man clone game.</li>
				<li>Blob man must collect all his blob children to pass the level.</li>
				<li>Skeleton enemies turn down corridors using a custom JavaScript function to randomize their direction.</li>
				<li>Skeletons increase in number every 2 levels.</li>
				<li>Skeletons increase in speed every level.</li>
				<li>Your scores are added to the bottom of the page after every game. They will disappear when you close down the page.</li>
				<li>Custom game start button added for those that are truly insane.</li>
			</ul>
			<img src={blobman} alt='Blob Man Game' />
		</section>
	)
}

export default BlobMan;