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
	return (
		<TableHead>
			<TableRow>
				<StyledTableCell>Day</StyledTableCell>
				<StyledTableCell>Cell Phone</StyledTableCell>
				<StyledTableCell>Driver</StyledTableCell>
				<StyledTableCell>Truck</StyledTableCell>
				<StyledTableCell>Trailer</StyledTableCell>
				<StyledTableCell>Type</StyledTableCell>
				<StyledTableCell>Location</StyledTableCell>
				<StyledTableCell>State</StyledTableCell>
				<StyledTableCell>Time</StyledTableCell>
				<StyledTableCell>Appt</StyledTableCell>
				<StyledTableCell>Status</StyledTableCell>
				<StyledTableCell>Needs</StyledTableCell>
				<StyledTableCell>Notes</StyledTableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
