import React from "react";
import { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filters, setFilters] = useState({
    team: 'all',
    day: 'Mon',
  })

	return (
		<FilterContext.Provider value={[filters, setFilters]}>
			{props.children}
		</FilterContext.Provider>
	);
};
