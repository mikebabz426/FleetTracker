import React from "react";
import {
	TextField,
	TableCell,
	TableRow,
	MenuItem,
	Select,
	InputBase,
	FormControl,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ApptSelector from "../Selectors/ApptToggle";
import { Formik, Field } from "formik";
import { weekDays, states, truckStatus } from "./../../services/services";

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
							<FormControl variant="outlined" className={classes.formControl}>
								<Field
									className={classes.selected}
									as={Select}
									name="day"
									variant="outlined"
									input={<CustomInput />}
								>
									{weekDays.map((day) => (
										<MenuItem
											className={classes.selected}
											value={day}
											key={day}
										>
											{day}
										</MenuItem>
									))}
								</Field>
							</FormControl>
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
							<FormControl variant="outlined" className={classes.formControl}>
								<Field
									className={classes.selected}
									as={Select}
									name="usState"
									variant="outlined"
									input={<CustomInput />}
								>
									{states.map((st) => (
										<MenuItem className={classes.selected} value={st} key={st}>
											{st}
										</MenuItem>
									))}
								</Field>
							</FormControl>
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
							<FormControl variant="outlined" className={classes.formControl}>
								<Field
									className={classes.selected}
									as={Select}
									name="usState"
									variant="outlined"
									input={<CustomInput />}
								>
									{truckStatus.map((st) => (
										<MenuItem className={classes.selected} value={st} key={st}>
											{st}
										</MenuItem>
									))}
								</Field>
							</FormControl>
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

const CustomInput = withStyles((theme) => ({
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),

		"&:focus": {
			borderRadius: 4,
			borderColor: theme.palette.secondary,
			boxShadow: `0 0 0 0.2rem rgba(102,187,106,.75)`,
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 80,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	selected: {
		fontWeight: "bold",
	},
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
}));

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

export default TruckRow;
