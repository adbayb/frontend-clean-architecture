import React, { useEffect, useMemo, useState } from "react";
import {
	createGetPropertiesInteractor,
	createInMemoryPropertyGateway,
	createListingViewModel,
} from "../../modules/listing";

export const Root = () => {
	const { interactor, viewModel } = useMemo(() => {
		const gateway = createInMemoryPropertyGateway();
		const interactor = createGetPropertiesInteractor(gateway);
		const viewModel = createListingViewModel();

		return {
			interactor,
			viewModel,
		};
	}, []);
	const [properties, setProperties] = useState(
		viewModel.state.properties.value
	);
	const [error, setError] = useState(viewModel.state.error.value);

	useEffect(() => {
		viewModel.state.properties.observe(setProperties);
		viewModel.state.error.observe(setError);
	}, [viewModel.state.error, viewModel.state.properties]);

	if (error) {
		return <p>An error occurred: {error}</p>;
	}

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
			}}
		>
			<h1>Properties</h1>
			<button onClick={() => viewModel.getProperties(interactor)}>
				Get properties
			</button>
			{properties.map((property, index) => {
				return <article key={index}>{property.price}</article>;
			})}
		</main>
	);
};
