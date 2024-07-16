import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './pages/root/Root';
import ErrorPage from './pages/root/ErrorPage';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import AgentDashboard from './pages/agent/AgentDashboard';
import UserLanding from './pages/user/UserLanding';
import AdminDashboard from './pages/admin/AdminDashboard';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "registration",
				element: <Registration />,
			},
			{
				path: "agent",
				element: <AgentDashboard />,
			},
			{
				path: "user",
				element: <UserLanding />,
			},
			{
				path: "admin",
				element: <AdminDashboard />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
