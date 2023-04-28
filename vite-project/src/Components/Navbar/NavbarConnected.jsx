import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png"

export default function NavbarConnected(props) {
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
					Tony
				</NavLink>
				<NavLink to="/" className="main-nav-item">
					<i className="fa fa-sign-out"></i>
					Sign Out
				</NavLink>
			</div>
		</nav>
	);
}
