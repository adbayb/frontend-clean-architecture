import { GetPropertiesOutputPort } from "../domain/useCases/GetProperties";

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
