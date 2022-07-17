import {
	UseCaseInputPort,
	UseCaseOutputPort,
} from "../../../sharedKernel/UseCase";
import { PropertyGatewayPort } from "../entities/Property";

/**
 * Ports definition
 */
type GetPropertiesRequestModel = void;

type GetPropertiesResponseModel = Array<{ price: number }>;

export type GetPropertiesInputPort =
	UseCaseInputPort<GetPropertiesRequestModel>;
export type GetPropertiesOutputPort =
	UseCaseOutputPort<GetPropertiesResponseModel>;

/**
 * Service definition
 */
export const createGetPropertiesInteractor = (
	gateway: PropertyGatewayPort,
	presenter: GetPropertiesOutputPort
): GetPropertiesInputPort => {
	return function getProperties() {
		try {
			const entities = gateway.getMany();
			const responseModel: GetPropertiesResponseModel = entities.map(
				(entity) => ({
					price: entity.price,
				})
			);

			presenter.ok(responseModel);
		} catch (error) {
			presenter.fail("An error occurred");
		}
	};
};
