import { Entity } from "./Entity";
import { Owner } from "./Owner";

export type Property = Entity<{
	price: number;
	numberOfRooms: number;
	surfaceArea: number;
	owner: Owner;
}>;

// @todo: aggregate with Owner affectation
