import { useState } from "react";
import {
	createGetPropertiesInteractor,
	createGetPropertiesPresenter,
	inMemoryPropertyGateway,
} from "../../modules/listing";

export const Root = () => {
	const [properties, setProperties] = useState();
	const presenter = createGetPropertiesPresenter(setProperties);
	const gateway = inMemoryPropertyGateway;
	const getProperties = createGetPropertiesInteractor(gateway, presenter);

	console.log("Updated", properties);

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
			}}
		>
			<h1>Properties</h1>
			<button onClick={() => getProperties()}>Get properties</button>
		</main>
	);
};
