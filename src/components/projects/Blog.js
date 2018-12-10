import React from 'react';
import Projectnav from '../Projectnav';
import blog from '../../images/blog.png';

const Blog = () => {
	return (
		<section className='project'>
			<Projectnav />
			<h5>Blog built in Ruby on Rails</h5>
			<a href="https://blog-in-gray.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className='btn green accent-4'>Live</button></a>
			<a href="https://github.com/mikebrucker/Rails-Blog" target="_blank" rel="noopener noreferrer"><button className='btn purple accent-4'>GitHub Repo</button></a>
			<ul>
				<li>Features full CRUD functionality (create, read, update, destroy)</li>
				<li>Users can create posts and comment on any post.</li>
				<li>Comments and Posts maintain new lines with the enter or return key for minimal formatting.</li>
				<li>Comments can be created and edited on the same page. Once created or edited the page is forced to refresh but will scroll back to the comment. If destroyed the page anchors itself on the original post.</li>
				<li>This is only an example blog so do not use your bank passwords and you can use fake emails.</li>
				<li>Log in as ExampleUser with the password example* or create your own account.</li>
			</ul>
			<img src={blog} alt="Blog" />

		</section>
	)
}

export default Blog;