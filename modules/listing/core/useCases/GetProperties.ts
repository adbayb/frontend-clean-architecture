import {
	UseCaseInputPort,
	UseCaseOutputPort,
} from "../../../sharedKernel/UseCase";
import { PropertyGatewayPort } from "../entities/Property";

/**
 * Ports definition
 */
export type GetPropertiesRequestModel = {};
export type GetPropertiesResponseModel = Array<{ price: number }>;
export type GetPropertiesInputPort = UseCaseInputPort<
	GetPropertiesRequestModel,
	GetPropertiesOutputPort
>;
export type GetPropertiesOutputPort =
	UseCaseOutputPort<GetPropertiesResponseModel>;

/**
 * Service definition
 */
export const createGetPropertiesInteractor = (
	gateway: PropertyGatewayPort
): GetPropertiesInputPort => {
	return async function getProperties(_, presenter) {
		const entities = await gateway.getMany();

		if (entities.length === 0) {
			presenter.empty();

			return;
		}

		const responseModel: GetPropertiesResponseModel = entities.map(
			(entity) => ({
				price: entity.price,
			})
		);

		presenter.ok(responseModel);
	};
};
