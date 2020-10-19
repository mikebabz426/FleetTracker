import React from "react";
import { useForm } from "react-hook-form";
import {
	Container,
	Typography,
	Backdrop,
	TextField,
	Button,
	Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	container: {
		backgroundColor: "#fff",
		borderRadius: "3px",
	},
	avatar: {
		margin: theme.spacing(1),
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

const AddTruckForm = (props) => {
	const classes = useStyles();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<Backdrop className={classes.backdrop} open={props.open}>
			<Container component="main" maxWidth="xs" className={classes.container}>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LocalShippingIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Add Driver
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="name"
							label="name"
							id="name"
							autoFocus
							inputRef={register}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="phone number"
							label="phone number"
							id="phone-number"
							inputRef={register}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="truck"
							label="truck"
							id="truck"
							inputRef={register}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="trailer"
							label="trailer"
							id="trailer"
							inputRef={register}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onSubmit={onSubmit}
						>
							Add New Driver
						</Button>
					</form>
				</div>
			</Container>
		</Backdrop>
	);
};

export default AddTruckForm;
