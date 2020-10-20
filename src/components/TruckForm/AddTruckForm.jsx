import React from "react";
import {
	Container,
	Typography,
	TextField,
	Button,
	Avatar,
	Radio,
	RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Formik, Form, Field } from "formik";

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
	radioGroup: {
		margin: theme.spacing(3, 0, 1, 0),
	},
}));

// const CustomInput = (props) => {
// 	return <TextField {...props} />;
// };

const AddTruckForm = (props) => {
	const classes = useStyles();

	return (
		// <Backdrop className={classes.backdrop} open={props.open}>
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
				onSubmit={(values) => {
					console.log("Submit Data: ", values);
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
					return (
						<Form onSubmit={handleSubmit}>
							<Field
								name="driverName"
								type="input"
								variant="outlined"
								margin="normal"
								label="Driver Name"
								required
								fullWidth
								as={TextField}
							/>
							<Field
								name="phoneNumber"
								type="input"
								variant="outlined"
								margin="normal"
								label="Phone Number"
								required
								fullWidth
								as={TextField}
							/>
							<Field
								name="truckNumber"
								type="input"
								variant="outlined"
								margin="normal"
								label="Truck Number"
								required
								fullWidth
								as={TextField}
							/>
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
							<RadioGroup
								aria-label="Trailer Type"
								className={classes.radioGroup}
							>
								<label>
									<Field
										value="53 Van"
										name="trailerType"
										type="radio"
										label="53 Van"
										as={Radio}
									/>
									53' Van
								</label>
								<label>
									<Field
										value="53 Reefer"
										name="trailerType"
										type="radio"
										label="53 Reefer"
										as={Radio}
									/>
									53' Reefer
								</label>
							</RadioGroup>

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
		// </Backdrop>
	);
};

export default AddTruckForm;
