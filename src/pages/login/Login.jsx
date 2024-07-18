import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../utils/useAxiosSecure';
import Swal from 'sweetalert2';

const Login = () => {
    const axiosSecure = useAxiosSecure();
	const navigate = useNavigate()
	let errorMessage = "";
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const data = {
			id: form.id.value,
			pin: form.password.value,
		};
		axiosSecure
			.post("/login",data)
			.then((res) => {
				console.log(res.data);
				if (res.data.status === 401) {
					Swal.fire({
						icon: "error",
						title: "Login Failed",
						text: `${res.data.message}`,
					});
				}else{
					navigate('/user')
				}
				form.reset();
			})
			.catch((error) => console.log(error.message));
	};
    return (
		<div className="border p-20 bg-green-300 rounded-lg">
			<h1 className="text-3xl text-center">
				Login to <br /> your <span className='font-bold'>PayNow</span> Account
			</h1>
			<form className="" onSubmit={handleSubmit}>
				<div className="flex flex-col my-3">
					<label htmlFor="id">Account Number/Email:</label>
					<input
						type="text"
						name="id"
						className="p-2 rounded-lg"
						placeholder="Give account number or email"
					/>
				</div>
				<div className="flex flex-col mb-3">
					<label htmlFor="password">Password:</label>
					<input
						type="text"
						name="password"
						className="p-2 rounded-lg"
						placeholder="Type your PIN here"
					/>
				</div>
				<div>
					<input
						type="submit"
						className="btn btn-block bg-white"
						value="Login"
					/>
				</div>
			</form>
			<div className="pt-4 text-center">
				If you don't register yet{" "}
				<p className="text-blue-700 underline">
					<Link to="/registration">Register Here</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;