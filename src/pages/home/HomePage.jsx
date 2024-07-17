import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
		<div className="bg-green-200 p-20">
			<h1 className="text-3xl font-bold text-center py-5">PayNow</h1>
			<div className="flex flex-row gap-5">
				<Link to="login">
					<button className="btn btn-accent">Login Here</button>
				</Link>
				<Link to="registration">
					<button className="btn btn-error">Register Here</button>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;