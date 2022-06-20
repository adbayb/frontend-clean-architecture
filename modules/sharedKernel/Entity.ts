export type Entity<Attributes extends Record<string, unknown> = {}> =
	Attributes & {
		id: number;
	};
