import React from 'react';
import Projectnav from '../Projectnav';
import towerdefense from '../../images/tower-defense.png';

const TowerDefense = () => {
	return (
		<section className='project'>
			<Projectnav />
			<h5>Tower Defense game created with the <a href="https://github.com/photonstorm/phaser" target="_blank" rel="noopener noreferrer">Phaser3</a> library</h5>
			<a href="https://tower-defense.mikebrucker.com" target="_blank" rel="noopener noreferrer"><button className='btn green accent-4'>Play</button></a>
			<a href="https://github.com/mikebrucker/Tower-Defense" target="_blank" rel="noopener noreferrer"><button className='btn purple accent-4'>GitHub Repo</button></a>
			<ul>
				<li>Towers search for enemies within a set radius, returns the closest enemy object, then locks on to that enemy until it is destroyed or out of range.</li>
				<li>Building towers ‘snap’ to a grid and cannot be built on each other or in ‘no-build zones’.</li>
				<li>Optimized animations and sounds to prevent slowdowns audio build-up.</li>
				<li>Enemies increase in speed and health each wave and special bosses come every 5 waves.</li>
				<li>Enemies follow a set path. Boss enemies every fifth wave. Survive 30 waves to win.</li>
				<li>If 20 Escape, You Lose.</li>
				<li>Build: Costs 1 Resource to Place Tower.</li>
				<li>Upgrade: Costs X Resources to Upgrade Tower Damage.</li>
				<li>Demolish: Removes a Tower.</li>
				<li>Arrow Keys: Moves Camera.</li>
				<li>Num1: Zoom(x1).</li>
				<li>Num2: Zoom(x1.25).</li>
				<li>Num3: Zoom(x1.5).</li>
				<li>Num4: Zoom(x1.75).</li>
				<li>Num5: Zoom(x2).</li>
				<li>Num9: Zoom In.</li>
				<li>Num0: Zoom Out.</li>
			</ul>
			<img src={towerdefense} alt="Tower Defense Game" />

		</section>
	)
}

export default TowerDefense;