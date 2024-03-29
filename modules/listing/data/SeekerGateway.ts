import { Seeker, SeekerGatewayPort } from "../core/entities/Seeker";

export const createInMemorySeekerGateway = (): SeekerGatewayPort => {
	const DATA: Array<Seeker> = [
		{
			id: 1,
			firstname: "John",
			lastname: "Doe",
			favorites: [],
		},
		{
			id: 2,
			firstname: "Jane",
			lastname: "Doe",
			favorites: [],
		},
	];

	return {
		async getOne(id) {
			const seeker = DATA.find((seeker) => seeker.id === id);

			if (!seeker) {
				throw new Error("Not found"); // @todo: custom error in shared kernel
			}

			return seeker;
		},
		async getMany() {
			return DATA;
		},
	};
};
