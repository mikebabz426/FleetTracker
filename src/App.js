import React from "react";
import Layout from "./components/Layout";
import { TruckProvider } from "./FleetContext";

function App() {
	return (
		<TruckProvider>
			<div className="App">
				<Layout />
			</div>
		</TruckProvider>
	);
}

export default App;
