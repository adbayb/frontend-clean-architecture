import { PropertyRepository } from "../ports/PropertyRepository";

type UseCase<Args extends Array<unknown>> = (...args: Args) => void;

export const getProperties: UseCase<[PropertyRepository]> = (repository) => {
	repository.getMany();
};
