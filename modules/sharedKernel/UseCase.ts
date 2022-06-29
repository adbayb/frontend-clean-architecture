import { Entity } from "./Entity";

export type UseCaseInputPort<
	RequestModel extends Record<string, unknown> | undefined = undefined
> = RequestModel extends undefined
	? () => void | Promise<void>
	: (input: RequestModel) => void | Promise<void>;

export type UseCaseOutputPort<
	DomainModel extends Entity | Array<Entity>,
	ResponseModel extends Record<string, unknown> | Array<Record<string, unknown>>
> = {
	ok(entity: DomainModel): ResponseModel;
	fail(message: string): void;
	// notFound(): void; // @note: other contract can be added to present common errors (eg. related to http code)
};
