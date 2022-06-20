import {
	UseCaseInputPort,
	UseCaseInteractor,
	UseCaseOutputPort,
} from "../../../sharedKernel/UseCase";
import { Property, PropertyGatewayPort } from "../entities/Property";

/**
 * Ports definition
 */
export type GetPropertiesInputPort = UseCaseInputPort;
export type GetPropertiesOutputPort = UseCaseOutputPort<
	Array<Property>,
	Array<{ price: number }>
>;

/**
 * Service definition
 */
export const createGetPropertiesInteractor = (
	gateway: PropertyGatewayPort,
	presenter: GetPropertiesOutputPort
): UseCaseInteractor<GetPropertiesInputPort> => {
	return function getProperties() {
		try {
			presenter.present(gateway.getMany());
		} catch (error) {
			presenter.presentError(error as Error);
		}
	};
};
