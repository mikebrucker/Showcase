import React from 'react';
import Projectnav from '../Projectnav';
import wheeloffortune from '../../images/wheel-of-javascript.png'

const WheelOfFortune = () => {
	return (
		<section className='project'>
			<Projectnav />
			<h5>Wheel of Fortune clone created with JavaScript and jQuery</h5>
			<a href="http://mikebrucker.com/Wheel-Of-Fortune/" target="_blank" rel="noopener noreferrer"><button className='btn green accent-4'>Play</button></a>
			<a href="https://github.com/mikebrucker/Wheel-Of-Fortune" target="_blank" rel="noopener noreferrer"><button className='btn purple accent-4'>GitHub Repo</button></a>
			<ul>
				<li>Styled in pure CSS to resemble the real Wheel of Fortune board.</li>
				<li>Game listens for input from the keyboard to guess a letter. Mobile has virtual keyboard to use.</li>
				<li>Cannot guess letter if you must spin first.</li>
				<li>10 games completed to win.</li>
				<li>10 wrong guesses per round and you lose.</li>
				<li>Hot keys: S for Spin // B for Begin.</li>
				<li>To solve puzzle type your guess into the box and click solve click enter guess for virtual keyboard.</li>
			</ul>
			<img src={wheeloffortune} alt="Wheel Of Fortune" />

		</section>
	)
}

export default WheelOfFortune;