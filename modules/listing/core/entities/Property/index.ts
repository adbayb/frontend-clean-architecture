import { AggregateRoot } from "../../../../sharedKernel/AggregateRoot";
import { EntityGateway } from "../../../../sharedKernel/Entity";
import { Owner } from "./Owner";

// @note: Property entity is an aggregate root (includes Owner entity) since
// both entities cannot live alone in the listing bounded context
export type Property = AggregateRoot<{
	price: number;
	numberOfRooms: number;
	surfaceArea: number;
	owner: Owner;
}>;

export type PropertyGatewayPort = EntityGateway<Property>;
