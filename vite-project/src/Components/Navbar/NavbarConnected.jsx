import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../Services/account.service";
import { userService } from "../../Services/user.service";

import logo from "../../assets/argentBankLogo.png"

export default function NavbarConnected(props) {

	const navigate = useNavigate()

	const [user, setUser] = useState([])

	useEffect(() => {
		userService.getUser()
			.then(response => {
				setUser(response.data.body)
			})
			.catch(err => console.log(err))
	}, [])

	const logout = () => {
		accountService.logout()
		navigate("/")
		location.reload();
	}

	return (
		<nav className="main-nav">
			<NavLink to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>
				<NavLink to="/user/profile" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					{user.firstName}
				</NavLink>
				<button onClick={logout} className="main-nav-item-button">
					<i className="fa fa-sign-out"></i>
					Sign Out
				</button>
			</div>
		</nav>
	);
}
