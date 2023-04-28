import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileLayout from "../Layout/ProfilLayout";
import Profile from "../Profile/Profile";
import ProfileEdit from "../Profile/ProfileEdit";
import NotFound from "../../../utils/NotFound";

export default function AdminRouter() {
	return (
		<Routes>
			<Route element={<ProfileLayout />}>
				<Route path="/" element={<Profile />} />
				<Route path="/edit/:id" element={<ProfileEdit />} />
				<Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
