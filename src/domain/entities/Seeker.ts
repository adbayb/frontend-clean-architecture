import { Entity } from "./Entity";

export type Seeker = Entity<{
	firstname: string;
	lastname: string;
}>;

// @todo: aggregate root with Owner affectation
