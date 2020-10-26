      
    
// import { useMutation, gql } from "@apollo/client";

// const UPDATE_DAY = gql`
// 	mutation updateDay($id: uuid!, $day: String!) {
// 		update_fleet_table_by_pk(pk_columns: { id: $id }, _set: { day: $day }) {
// 			id
// 			day
// 		}
// 	}
// `;
// const UPDATE_LOC = gql`
// 	mutation updateLocation($id: uuid!, $location: String!) {
// 		update_fleet_table_by_pk(
// 			pk_columns: { id: $id }
// 			_set: { location: $location }
// 		) {
// 			id
// 			location
// 		}
// 	}
// `;
// const UPDATE_STATE = gql`
// 	mutation updateState($id: uuid!, $usState: String!) {
// 		update_fleet_table_by_pk(
// 			pk_columns: { id: $id }
// 			_set: { usState: $usState }
// 		) {
// 			id
// 			usState
// 		}
// 	}
// `;
// const UPDATE_APPT = gql`
// 	mutation updateAppt($id: uuid!, $appt: String!) {
// 		update_fleet_table_by_pk(pk_columns: { id: $id }, _set: { appt: $appt }) {
// 			id
// 			appt
// 		}
// 	}
// `;
// const UPDATE_STATUS = gql`
// 	mutation updateStatus($id: uuid!, $status: String!) {
// 		update_fleet_table_by_pk(
// 			pk_columns: { id: $id }
// 			_set: { status: $status }
// 		) {
// 			id
// 			status
// 		}
// 	}
// `;
// const UPDATE_NEEDS = gql`
// 	mutation updateNeeds($id: uuid!, $needs: String!) {
// 		update_fleet_table_by_pk(pk_columns: { id: $id }, _set: { needs: $needs }) {
// 			id
// 			needs
// 		}
// 	}
// `;
// const UPDATE_NOTES = gql`
// 	mutation updateNotes($id: uuid!, $notes: String!) {
// 		update_fleet_table_by_pk(pk_columns: { id: $id }, _set: { notes: $notes }) {
// 			id
// 			notes
// 		}
// 	}
// `;


        	// const [updateDay] = useMutation(UPDATE_DAY);
	// const [updateLocation] = useMutation(UPDATE_LOC);
	// const [updateState] = useMutation(UPDATE_STATE);
	// const [updateAppt] = useMutation(UPDATE_APPT);
	// const [updateStatus] = useMutation(UPDATE_STATUS);
	// const [updateNeeds] = useMutation(UPDATE_NEEDS);
	// const [updateNotes] = useMutation(UPDATE_NOTES);
        
        
        
        
        // const submit = (field) => {
				// 	if (field === "day") {
				// 		updateDay({
				// 			variables: {
				// 				id: values.id,
				// 				day: values.day,
				// 			},
				// 		});
				// 	} else if (field === "location") {
				// 		updateLocation({
				// 			variables: {
				// 				id: values.id,
				// 				location: values.location,
				// 			},
				// 		});
				// 	} else if (field === "usState") {
				// 		updateState({
				// 			variables: {
				// 				id: values.id,
				// 				usState: values.usState,
				// 			},
				// 		});
				// 	} else if (field === "appt") {
				// 		updateAppt({
				// 			variables: {
				// 				id: values.id,
				// 				appt: values.appt,
				// 			},
				// 		});
				// 	} else if (field === "status") {
				// 		updateStatus({
				// 			variables: {
				// 				id: values.id,
				// 				status: values.status,
				// 			},
				// 		});
				// 	} else if (field === "needs") {
				// 		updateNeeds({
				// 			variables: {
				// 				id: values.id,
				// 				needs: values.needs,
				// 			},
				// 		});
				// 	} else {
				// 		updateNotes({
				// 			variables: {
				// 				id: values.id,
				// 				notes: values.notes,
				// 			},
				// 		});
				// 	}
				// };