import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import Home from "../Home/Home";
import NotFound from "../../../utils/NotFound"

export default function PublicRouter() {
	return (
		<Routes>
			<Route element={<PublicLayout />}>
				<Route path="/" element={<Home />} />
			  <Route path="/*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
