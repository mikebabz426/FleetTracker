import React from "react";
import Layout from "./components/Layout";
import { TruckProvider } from "./FleetContext";
import {FilterProvider} from './FilterContext'

function App() {
	return (
		<TruckProvider>
			<FilterProvider>
			<div className="App">
				<Layout />
			</div>
			</FilterProvider>
		</TruckProvider>
	);
}

export default App;
