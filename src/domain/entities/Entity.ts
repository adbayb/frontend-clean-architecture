export type Entity<Data extends Record<string, unknown>> = Data & {
	id: number;
};
