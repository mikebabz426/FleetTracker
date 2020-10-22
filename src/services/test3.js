	const handleLocationChange = (e) => {
		const updatedLocation = e.target.value;
		const key = id;

		setTrucks((trucks) => {
			let updatedTrucks = trucks.map((truck) =>
				truck.id === key ? { ...truck, location: updatedLocation } : truck
			);
			return [...updatedTrucks];
		});
	};
	const handleTimeChange = (e) => {
		const updatedTime = e.target.value;
		const key = id;
		setTrucks((trucks) => {
			let updatedTrucks = trucks.map((truck) =>
				truck.id === key ? { ...truck, time: updatedTime } : truck
			);
			return [...updatedTrucks];
		});
	};
	const handleNeedsChange = (e) => {
		const updatedNeeds = e.target.value;
		const key = id;
		setTrucks((trucks) => {
			let updatedTrucks = trucks.map((truck) =>
				truck.id === key ? { ...truck, needs: updatedNeeds } : truck
			);
			return [...updatedTrucks];
		});
	};
	const handleNotesChange = (e) => {
		const updatedNotes = e.target.value;
		const key = id;
		setTrucks((trucks) => {
			let updatedTrucks = trucks.map((truck) =>
				truck.id === key ? { ...truck, notes: updatedNotes } : truck
			);
			return [...updatedTrucks];
		});
	};