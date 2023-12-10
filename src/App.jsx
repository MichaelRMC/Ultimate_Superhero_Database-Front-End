import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home";
import SuperheroDetails from "../src/Pages/SuperheroDetails";
import SuperheroRoster from "../src/Pages/SuperheroRoster";
import NewSuperhero from "../src/Pages/NewSuperhero";
import EditSuperhero from "./Pages/EditSuperhero";
import Four0Four from "./Pages/Four0Four";

import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/superhero' element={<SuperheroRoster />} />
					<Route path='/superhero/:id' element={<SuperheroDetails />} />
					<Route path='/superhero/new' element={<NewSuperhero />} />
					<Route path='/superhero/:id/edit' element={<EditSuperhero />} />
					<Route path='*' element={<Four0Four />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
