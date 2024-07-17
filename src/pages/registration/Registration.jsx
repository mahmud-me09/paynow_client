import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../utils/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Registration = () => {
	const axiosSecure = useAxiosSecure()
	let errorMessage = ""
    const handleSubmit = (event)=>{
		
        event.preventDefault()
		const form = event.target
		const data = {
			name: form.name.value,
			number: form.number.value,
			email: form.email.value,
			pin: form.password.value,
		}
		axiosSecure.post("/registration", data)
		.then(res=>{
			console.log(res.data);
			if(res.data.status ===409){
				Swal.fire({
					icon: "error",
					title: "No new User Created",
					text: `${res.data.message}`,
					footer: '<a href="login"><button className="btn btn-block">Go to login Page</button></Link>',
				});
			}
			form.reset()
		})
		.catch(error=> console.log(error.message));
    }
    return (
		<div className="border p-20 bg-green-300 rounded-lg">
			<h1 className="text-3xl text-center">
				Register to <span className="block font-bold">PayNow</span>
			</h1>
			<form className="" onSubmit={handleSubmit}>
				<div className="flex flex-col my-3">
					<label htmlFor="name">Your Name:</label>
					<input
						type="text"
						name="name"
						className="p-2 rounded-lg"
						placeholder="Your Name"
					/>
				</div>
				<div className="flex flex-col my-3">
					<label htmlFor="idNumber">Account Number:</label>
					<input
						type="text"
						name="number"
						className="p-2 rounded-lg"
						placeholder="Your account number"
					/>
				</div>
				<div className="flex flex-col my-3">
					<label htmlFor="idNumber">Email Address:</label>
					<input
						type="text"
						name="email"
						className="p-2 rounded-lg"
						placeholder="Your Email Address"
					/>
				</div>
				<div className="flex flex-col mb-3">
					<label htmlFor="password">PIN Number:</label>
					<input
						type="password"
						name="password"
						className="p-2 rounded-lg"
						placeholder="Set your PIN here"
					/>
				</div>
				<div>
					<p className="text-red-600 text-center">{errorMessage}</p>
					<input
						type="submit"
						className="btn btn-block bg-white"
						value="Register"
					/>
				</div>
			</form>
			<div className="pt-4 text-center">
				Already have an account
				<p className="text-blue-700 underline">
					<Link to="/login">Login Here</Link>
				</p>
			</div>
		</div>
	);
};

export default Registration;