import { AggregateRoot } from "../../../../../sharedKernel/AggregateRoot";
import { Owner } from "./Owner";

// @note: Property is an aggregate root by including Owner entity since
// both entities cannot live alone in the listing bounded context
export type Property = AggregateRoot<{
	price: number;
	numberOfRooms: number;
	surfaceArea: number;
	owner: Owner;
}>;

export interface PropertyGatewayPort {
	getMany(): Property[];
	getOne(id: Property["id"]): Property;
}
