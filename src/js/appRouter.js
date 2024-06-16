import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import { Footer } from "./component/Footer";
import { Agenda } from "./views/agenda";
import { AddNewContact } from "./views/addNewContact";
import { EditContact } from "./views/editContact";
import injectContext from "./store/appContext";


//create your first component
const AppRouter = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Agenda />} />
						<Route path="/NewContact" element={<AddNewContact />} />
						<Route path="/EditContact/:id" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRouter);
