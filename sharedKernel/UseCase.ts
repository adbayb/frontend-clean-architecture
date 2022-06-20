import { Entity } from "./Entity";

export type UseCaseInputPort<
	RequestModel extends Record<string, unknown> = {}
> = RequestModel;

export type UseCaseInteractor<Input extends UseCaseInputPort> = (
	input: Input
) => void | Promise<void>;

export type UseCaseOutputPort<
	DomainModel extends Entity | Array<Entity>,
	ResponseModel extends Record<string, unknown>
> = {
	present(entity: DomainModel): ResponseModel;
	presentError(error: Error): void;
	presentLoading(isLoading: boolean): void;
};
