import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { FilterContext } from "../../FilterContext";
import {
	Paper,
	TableContainer,
	Table,
	TableBody,
	CircularProgress,
} from "@material-ui/core";
import TableHeader from "./TableHeader";
import TruckRow from "./TruckRow";

const FLEET_ALL = gql`
	query FLEET_ALL {
		fleet_table {
			appt
			cell
			day
			driver
			id
			location
			needs
			notes
			status
			team
			time
			trailer
			truck
			type
			usState
		}
	}
`;

const FleetTable = () => {
	const [filters] = useContext(FilterContext);

	const { loading, error, data, refetch } = useQuery(FLEET_ALL);

	if (loading) return <CircularProgress />;
	if (error) return <p>Error :(</p>;

	const { fleet_table: trucks } = data;

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
