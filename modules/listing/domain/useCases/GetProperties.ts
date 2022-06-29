import {
	UseCaseInputPort,
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
): GetPropertiesInputPort => {
	return function getProperties() {
		try {
			presenter.ok(gateway.getMany());
		} catch (error) {
			presenter.fail("An error occurred");
		}
	};
};
