import { Property } from "../entities/Property";

export interface PropertyRepository {
	getMany(): Property[];
	getOne(id: Property["id"]): Property;
}
