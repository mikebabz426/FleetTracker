import React from "react";
import { TextField, TableCell, TableRow } from "@material-ui/core";
import Selector from "./Selector";
import { withStyles, makeStyles } from "@material-ui/core/styles";

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

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: "#EBF5FF",
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
	notes: {
		backgroundColor: "#fff",
	},
	location: {
		fontWeight: "bold",
	},
});

const TruckRow = (props) => {
	const classes = useStyles();

	const {
		id,
		day,
		driver,
		cell,
		truck,
		trailer,
		type,
		location,
		usState,
		time,
		needs,
		notes,
	} = props;

	return (
		<StyledTableRow key={id}>
			<StyledTableCell component="th" scope="row">
				{day}
			</StyledTableCell>
			<StyledTableCell>{cell}</StyledTableCell>
			<StyledTableCell>{driver}</StyledTableCell>
			<StyledTableCell>{truck}</StyledTableCell>
			<StyledTableCell>{trailer}</StyledTableCell>
			<StyledTableCell>{type}</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.location}
					variant="outlined"
					label="Location"
					color="secondary"
					size="small"
					value={location}
				/>
			</StyledTableCell>
			<StyledTableCell>
				<Selector label="usState" st={usState} />
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="time"
					color="secondary"
					size="small"
					value={time}
				/>
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="needs"
					color="secondary"
					size="small"
					value={needs}
				/>
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="notes"
					color="secondary"
					size="small"
					value={notes}
				/>
			</StyledTableCell>
		</StyledTableRow>
	);
};

export default TruckRow;
