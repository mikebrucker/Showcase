import React from 'react';
import profile from '../images/profile.jpg'
import goalieice from '../images/goalie-ice.jpeg'
import tm12 from '../images/tm12.jpg'

const About = () => {
	return (
		<section className='about'>
			<h4 className='center indigo-text text-darken-4'>About Me</h4>
			<img src={profile} className='left' alt="Profile" />
			<article>
				<p>Hi there, I'm Mike Brucker an aspiring web developer, avid hockey player, curious tech geek, and overall active person. I am an Air Force Veteran that was an Aircraft Armament Systems Technician. I am a Temple University graduate with a degree in Media Studies and Production. I am a New York Code and Design Academy graduate with a degree in Web Development. My greatest achievement is completing the NYCDA Web Development Intensive course because it made me realize that I am a perfect fit for this line of work. I did very well in the three month course and it gave me much more than three months of experience. I acquired over 480 hours of coding knowledge during the course and am ready for the next level up.</p>
				<img src={goalieice} className='right' alt="Goalie on Ice" />
				<p>In my free time I play hockey as a goaltender, video games on PlayStation4, mostly rpg/strategy games, travel when I can, and also love to cook. I am always analyzing and trying to optimize just about everything even outside of code. It is quite a useful skill to have when I play hockey and cook. Any error I make is always the biggest learning experience. The next time a similar situation comes up I am prepared and do better. I keep pucks and errors out of the net!</p>
				<img src={tm12} alt="Tough Mudder" />
			</article>
		</section>
	)
}

export default About;