import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const navigate = useNavigate()
	const [login, setLogin] = useState({
		email: 'tony@stark.com',
		password: 'password123'
	})

	const onChange = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = (e) => {
		console.log("je suis dans le submit")
		e.preventDefault();
		axios.post('http://localhost:3001/api/v1/user/login', login) 
			.then(response => {
				console.log(response)
				navigate("/user/profile")
			})
			.catch(error => console.log(error))
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Username</label>
						<input type="text" name="email" value={login.email} onChange={onChange}/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" value={login.password} onChange={onChange}/>
					</div>
					<div className="input-remember">
						<label htmlFor="remember-me">Remember me</label>
						<input type="checkbox" name="remember-me" />
					</div>
					<button className="sign-in-button">
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}
