import { GetPropertiesOutputPort } from "../domain/useCases/GetProperties";

export const createGetPropertiesPresenter = (
	setState: (value: any) => void
): GetPropertiesOutputPort => {
	return {
		present(entities) {
			const dto = entities.map((entity) => ({
				price: entity.price,
			}));

			setState(dto);

			return dto;
		},
		presentError(error) {
			console.error(error);
		},
		presentLoading(isLoading) {
			return isLoading;
		},
	};
};
