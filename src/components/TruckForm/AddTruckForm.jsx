import React from "react";
import {
	Container,
	Typography,
	TextField,
	Button,
	Avatar,
	Radio,
	FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";

//GQL Mutation

const ADD_DRIVER = gql`
	mutation MyMutation(
		$driver: String!
		$truck: Int!
		$trailer: Int!
		$cell: String!
		$type: String!
		$team: String!
	) {
		insert_fleet_table_one(
			object: {
				driver: $driver
				truck: $truck
				trailer: $trailer
				cell: $cell
				type: $type
				team: $team
			}
		) {
			id
		}
	}
`;

//Form Validation:

let truckSchema = Yup.object().shape({
	driverName: Yup.string().required().min(3),
	phoneNumber: Yup.string().required().min(12),
	truckNumber: Yup.number().required().positive().integer(),
	trailerNumber: Yup.number().required().positive().integer(),
	trailerType: Yup.string().required(),
});

//Custom Radio Input

const CustomRadio = ({ label, ...props }) => {
	const [field] = useField(props);
	return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

//Form Component

const AddTruckForm = (props) => {
	const classes = useStyles();
	const [addDriver] = useMutation(ADD_DRIVER);

	return (
		<Container component="main" maxWidth="xs" className={classes.container}>
			<Avatar className={classes.avatar}>
				<LocalShippingIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Add Driver
			</Typography>
			<Formik
				initialValues={{
					driverName: "",
					phoneNumber: "",
					truckNumber: "",
					trailerNumber: "",
					trailerType: "",
				}}
				validationSchema={truckSchema}
				onSubmit={(values) => {
					props.toggler(false);
					addDriver({
						variables: {
							driver: values.driverName,
							truck: values.truckNumber,
							trailer: values.trailerNumber,
							cell: values.phoneNumber,
							team: "Team One",
							type: values.trailerType,
						},
					});
					window.location.reload(true);
				}}
			>
				{({ errors, touched }) => {
					return (
						<Form>
							<Field
								name="driverName"
								type="input"
								variant="outlined"
								margin="normal"
								label="Driver Name"
								fullWidth
								as={TextField}
							/>
							{errors.driverName && touched.driverName ? (
								<Typography color="error">
									Please enter a valid driver name
								</Typography>
							) : null}
							<Field
								name="phoneNumber"
								type="input"
								variant="outlined"
								margin="normal"
								label="Phone Number"
								fullWidth
								as={TextField}
							/>
							{errors.phoneNumber && touched.phoneNumber ? (
								<Typography color="error">
									Please enter a valid phone number: xxx-xxx-xxxx
								</Typography>
							) : null}
							<Field
								name="truckNumber"
								type="input"
								variant="outlined"
								margin="normal"
								label="Truck Number"
								fullWidth
								as={TextField}
							/>
							{errors.truckNumber && touched.truckNumber ? (
								<Typography color="error">
									Please enter a valid truck number
								</Typography>
							) : null}
							<Field
								name="trailerNumber"
								type="input"
								variant="outlined"
								margin="normal"
								label="Trailer Number"
								required
								fullWidth
								as={TextField}
							/>
							{errors.trailerNumber && touched.trailerNumber ? (
								<Typography color="error">
									Please enter a valid trailer number
								</Typography>
							) : null}

							<CustomRadio
								value="53' Reefer"
								name="trailerType"
								type="radio"
								label="53 Reefer"
							/>
							<CustomRadio
								value="53' Van"
								name="trailerType"
								type="radio"
								label="53 Van"
							/>
							{errors.trailerType && touched.trailerType ? (
								<Typography color="error">
									Please select a trailer type
								</Typography>
							) : null}

							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Add New Driver
							</Button>
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
};

//Custom Styling

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#fff",
		borderRadius: "3px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(4, 0, 2, 0),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		marginBottom: "3rem",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default AddTruckForm;
