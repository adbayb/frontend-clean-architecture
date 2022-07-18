import {
	GetPropertiesOutputPort,
	GetPropertiesResponseModel,
} from "../domain/useCases/GetProperties";

/**
 * interface ViewModel extends Presenter, Controller {
 * 	get(): GetPropertiesDTO;
 * }
 *
 * interface Presenter<InteractorOutputPort> extends InteractorOutputPort {
 *	notify()
 *	subscribe()
 * }
 *
 * interface Controller<InteractorInputPort> {
 * 	execute(interactor: InteractorInputPort): void
 * }
 */
export const createGetPropertiesPresenter = (
	setState: (value: any) => void
): GetPropertiesOutputPort => {
	type ViewModel = {
		isLoading: boolean;
		data: GetPropertiesResponseModel;
		error?: string;
	};

	const vm: ViewModel = {
		isLoading: false,
		data: [],
	};

	console.log(vm);

	return {
		ok(responseModel) {
			setState(responseModel);

			return responseModel;
		},
		fail(error) {
			console.error(error);
		},
	};
};
