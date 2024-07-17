import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
		<div className="flex flex-col justify-center h-screen max-w-xl items-center mx-auto">
			<Outlet></Outlet>
		</div>
	);
};

export default Root;