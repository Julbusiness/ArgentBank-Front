import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../Services/user.service.js";

export default function ProfileEdit() {
	const navigate = useNavigate();
	const [user, setUser] = useState([]);

	useEffect(() => {
		userService
			.getUser()
			.then((response) => {
				// console.log(response.data.body);
				setUser(response.data.body);
			})
			.catch((err) => console.log(err));
	}, []);

	const onChange = (e) => {
		// console.log(e.target.name)
		// console.log(e.target.value)
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		userService
			.editUser(user)
			.then((response) => {
				navigate("/user/profile");
			})
			.catch((err) => console.log(err));
	};

	return (
		<main className="main bg-light">
			<div className="header">
				<h1 className="title">
					Welcome back
					<br />
					<form className="form-update">
						<div className="form-input">
							<div className="input-wrapper-update">
								<label htmlFor="firstName"></label>
								<input
									type="text"
									name="firstName"
									placeholder={user.firstName}
									value=""
									onChange={onChange}
								/>
							</div>
							<div className="input-wrapper-update">
								<label htmlFor="lastName"></label>
								<input
									type="text"
									name="lastName"
									placeholder={user.lastName}
									value=""
									onChange={onChange}
								/>
							</div>
						</div>
						<div className="form-button">
							<button className="edit-button-save" onClick={onSubmit}>Save</button>
							<button className="edit-button-cancel" >Cancel</button>
						</div>
					</form>
				</h1>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button-edit">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button-edit">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button-edit">View transactions</button>
				</div>
			</section>
		</main>
	);
}
