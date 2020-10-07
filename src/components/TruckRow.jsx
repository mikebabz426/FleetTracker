import React from "react";
import TextField from "@material-ui/core/TextField";
import Selector from "./selector";
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
});

const TruckRow = () => {
	const classes = useStyles();

	return (
		<StyledTableRow key={row.truck}>
			<StyledTableCell component="th" scope="row">
				{row.day}
			</StyledTableCell>
			<StyledTableCell>{row.cellPhone}</StyledTableCell>
			<StyledTableCell>{row.driver}</StyledTableCell>
			<StyledTableCell>{row.truck}</StyledTableCell>
			<StyledTableCell>{row.trailer}</StyledTableCell>
			<StyledTableCell>{row.type}</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.location}
					variant="outlined"
					label="Location"
					color="secondary"
					size="small"
				/>
			</StyledTableCell>
			<StyledTableCell>
				<Selector label="usState" />
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="time"
					color="secondary"
					size="small"
				/>
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="needs"
					color="secondary"
					size="small"
				/>
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="notes"
					color="secondary"
					size="small"
				/>
			</StyledTableCell>
		</StyledTableRow>
	);
};

export default TruckRow;
