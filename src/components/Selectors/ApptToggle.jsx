import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const ApptSelector = (props) => {
	return (
		<Checkbox
			checked={props.checked}
			size="small"
			inputProps={{ "aria-label": "checkbox with small size" }}
		/>
	);
};

export default ApptSelector;
