import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#0257A2",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
		padding: ".2rem 1rem",
	},
}))(TableCell);

const TableHeader = () => {
	const headerNames = [
		"Day",
		"Cell Phone",
		"Driver",
		"Truck",
		"Trailer",
		"Type",
		"Location",
		"State",
		"Time",
		"Appt",
		"Status",
		"Needs",
		"Notes",
	];
	return (
		<TableHead>
			<TableRow>
				<StyledTableCell />
				{headerNames.map((header) => (
					<StyledTableCell key={header}>{header}</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
