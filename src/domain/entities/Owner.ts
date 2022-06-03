import { Entity } from "./Entity";

export type Owner = Entity<{
	firstname: string;
	lastname: string;
}>;
