import { Entity } from "../../../../../sharedKernel/Entity";

export type Owner = Entity<{
	firstname: string;
	lastname: string;
}>;
