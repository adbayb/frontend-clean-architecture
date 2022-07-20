export type Entity<Attributes extends Record<string, unknown> = {}> =
	Attributes & {
		id: number;
	};

export type EntityGateway<Ent extends Entity, Methods = {}> = Methods & {
	getOne(id: Ent["id"]): Promise<Ent>;
	getMany(): Promise<Ent[]>;
};
