import React from 'react';
import { Link } from 'react-router-dom';

const Projectnav = () => {
	return (
		<div className='projectnav center'>
			<h4 className="indigo-text text-darken-4">My Projects</h4>
				<div className="teal nav-wrapper">
					<ul>
						<Link to='/projects/blobman'><li>Blob Man</li></Link>
						<Link to='/projects/towerdefense'><li>Tower Defense</li></Link>
						<Link to='/projects/phaserwebpack'><li>Phaser3 Webpack</li></Link>
						<Link to='/projects/rostered'><li>Rostered</li></Link>
						<Link to='/projects/wheeloffortune'><li>Wheel Of Fortune</li></Link>
						<Link to='/projects/blog'><li>Blog</li></Link>
					</ul>
				</div>
		</div>
	)
}

export default Projectnav;