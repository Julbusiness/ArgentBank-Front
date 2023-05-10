import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { userService } from "../../Services/user.service";

export default function Profile() {

	const navigate = useNavigate()

	const [user, setUser] = useState([])

	useEffect(() => {
		userService.getUser()
			.then(response => {
				console.log(response.data.body)
				setUser(response.data.body)
			})
			.catch(err => console.log(err))
	}, [])

	const UserName = () => {
		navigate("../edit/")
	}

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{user.firstName} {user.lastName} !
				</h1>
				<button onClick={() => UserName()} className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
}
