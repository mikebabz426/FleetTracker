import React, { useContext } from "react";
import { TruckContext } from "../../FleetContext";
import { FilterContext } from "../../FilterContext";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHeader from "./TableHeader";
import TruckRow from "./TruckRow";

const FleetTable = () => {
	const [trucks] = useContext(TruckContext);
	const [filters] = useContext(FilterContext);

	const filteredTrucks = trucks
		.filter((truck) => {
			if (filters.team === "All") return true;
			if (filters.team === truck.team) return true;
			return false;
		})
		.filter((truck) => {
			if (filters.day === "All") return true;
			if (filters.day === truck.day) return true;
			return false;
		})
		.map((truck) => {
			return <TruckRow key={truck.id} {...truck} />;
		});

	return (
		<TableContainer component={Paper}>
			<Table aria-label="customized table">
				<TableHeader />

				<TableBody>{filteredTrucks}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default FleetTable;
