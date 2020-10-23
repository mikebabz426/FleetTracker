import React from "react";
import { TextField, TableCell, TableRow } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ApptSelector from "../Selectors/ApptToggle";
import Selector from "./../Selectors/Selector";
import { Formik, Field } from "formik";

// const UPDATE_FIELD = gql`
// 	mutation Update($id: uuid!, $notes: String!) {
// 		update_fleet_table_by_pk(pk_columns: { id: $id }, _set: { notes: $notes }) {
// 			id
// 			notes
// 		}
// 	}
// `;

const TruckRow = (props) => {
	const classes = useStyles();
	// const [updateTruck] = useMutation(UPDATE_FIELD);

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
		appt,
		status,
		needs,
		notes,
	} = props;

	return (
		<Formik
			initialValues={{
				id: id,
				day: day,
				location: location,
				usState: usState,
				time: time,
				status: status,
				needs: needs,
				notes: notes,
			}}
			// onSubmit={(values) => {
			// 	updateDriver({
			// 		variables: {
			// 			location: values.location,
			// 			time: values.time,
			// 			needs: values.needs,
			// 			notes: values.notes,
			// 		},
			// 	});
			// }}
		>
			{({ values }) => {
				console.log(values);
				return (
					<StyledTableRow key={id}>
						<StyledTableCell>
							<Field as={Selector} type="day" val={values.day} name="day" />
						</StyledTableCell>
						<StyledTableCell>{cell}</StyledTableCell>
						<StyledTableCell>{driver}</StyledTableCell>
						<StyledTableCell>{truck}</StyledTableCell>
						<StyledTableCell>{trailer}</StyledTableCell>
						<StyledTableCell>{type}</StyledTableCell>
						<StyledTableCell>
							<Field
								name="location"
								type="input"
								size="small"
								color="secondary"
								variant="outlined"
								className={classes.location}
								as={CustomLocationField}
							/>
						</StyledTableCell>
						<StyledTableCell>
							<Field
								as={Selector}
								type="usState"
								name="usState"
								val={values.usState}
							/>
						</StyledTableCell>
						<StyledTableCell>
							<Field
								name="time"
								type="input"
								size="small"
								color="secondary"
								className={classes.inputCenter}
								as={CustomField}
							/>
						</StyledTableCell>
						<StyledTableCell>
							<ApptSelector checked={appt} id={id} />
						</StyledTableCell>
						<StyledTableCell>
							<Field
								as={Selector}
								type="status"
								name="status"
								val={values.status}
							/>
						</StyledTableCell>
						<StyledTableCell>
							<Field
								name="needs"
								label="Needs"
								type="input"
								variant="outlined"
								size="small"
								color="secondary"
								className={classes.notes}
								as={TextField}
							/>
						</StyledTableCell>
						<StyledTableCell>
							<Field
								name="notes"
								label="Notes"
								type="input"
								variant="outlined"
								size="small"
								color="secondary"
								className={classes.notes}
								as={TextField}
							/>
						</StyledTableCell>
					</StyledTableRow>
				);
			}}
		</Formik>
	);
};

//Custom Component Styling

const CustomField = withStyles({
	root: {
		width: 100,
		"& .MuiInput-underline:after": {
			borderBottomColor: "#66bb6a",
		},
	},
})(TextField);

const CustomLocationField = withStyles({
	root: {
		fontWeight: "bold",
		width: 160,
		"& .MuiInput-underline:after": {
			borderBottomColor: "#66bb6a",
		},
	},
})(TextField);

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#0257A2",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
		padding: ".2rem 1rem .2rem 1rem",
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
	inputCenter: {
		textAlign: "center",
		color: "red",
	},

	location: {
		fontWeight: "bold",
	},

	table: {
		minWidth: 700,
	},
	notes: {
		backgroundColor: "#fff",
	},
});

export default TruckRow;
