import React from "react";
import truckList from "./../services/trucks";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHeader from "./TableHeader";
import TableBody from "@material-ui/core/TableBody";
import TruckRow from "./TruckRow";

const FleetTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="customized table">
				<TableHeader />
				<TableBody>
					{truckList.map((truck) => (
						<TruckRow
							key={truck.id}
							id={truck.id}
							day={truck.day}
							driver={truck.driver}
							cell={truck.cell}
							truck={truck.truck}
							trailer={truck.trailer}
							type={truck.type}
							location={truck.location}
							usState={truck.usState}
							time={truck.time}
							needs={truck.needs}
							notes={truck.notes}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default FleetTable;
