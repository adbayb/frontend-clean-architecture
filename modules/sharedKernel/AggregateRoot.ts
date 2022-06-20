import { Entity } from "./Entity";

export type AggregateRoot<Attributes extends Record<string, unknown> = {}> =
	Entity<Attributes>;
