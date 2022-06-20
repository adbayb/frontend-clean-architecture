import { Entity } from "./Entity";

export type UseCaseInputPort<
	RequestModel extends Record<string, unknown> | undefined = undefined
> = RequestModel;

export type UseCaseInteractor<Input extends UseCaseInputPort> =
	Input extends undefined
		? () => void | Promise<void>
		: (input: Input) => void | Promise<void>;

export type UseCaseOutputPort<
	DomainModel extends Entity | Array<Entity>,
	ResponseModel extends Record<string, unknown> | Array<Record<string, unknown>>
> = {
	present(entity: DomainModel): ResponseModel;
	presentError(error: Error): void;
	presentLoading(isLoading: boolean): void;
};
