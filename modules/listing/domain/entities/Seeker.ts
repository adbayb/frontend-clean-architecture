import { Entity } from "../../../sharedKernel/Entity";
import { Property } from "./Property";

export type Seeker = Entity<{
	firstname: string;
	lastname: string;
	favorites: Array<Property>; // @todo reference by id only?
}>;

export interface SeekerGatewayPort {
	getOne(id: Seeker["id"]): Seeker;
}
