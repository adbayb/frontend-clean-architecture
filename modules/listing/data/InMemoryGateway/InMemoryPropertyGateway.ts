import { Property, PropertyGatewayPort } from "../../domain/entities/Property";

export const createInMemoryPropertyGateway = (): PropertyGatewayPort => {
	const DATA: Array<Property> = [
		{
			id: 1,
			numberOfRooms: 2,
			price: 150000,
			owner: {
				id: 1,
				firstname: "John",
				lastname: "Doe",
			},
			surfaceArea: 75,
		},
	];

	return {
		getMany() {
			return DATA;
		},
		getOne(id) {
			const property = DATA.find((property) => property.id === id);

			if (!property) {
				throw new Error("Not found"); // @todo: custom error in shared kernel
			}

			return property;
		},
	};
};
