import { GetPropertiesOutputPort } from "../domain/useCases/GetProperties";

export type GetPropertiesDTO = ReturnType<GetPropertiesOutputPort["ok"]>;

interface GetPropertiesViewModel extends GetPropertiesOutputPort {
	get(): GetPropertiesDTO;
}

const createViewModel = (viewModelContract: GetPropertiesOutputPort) => {
	const vm: ReturnType<GetPropertiesOutputPort["ok"]> = [];

	return {
		...viewModelContract,
		get() {
			return vm;
		},
	};
};

const viewModel = createViewModel({
	fail() {},
	ok() {
		return [];
	},
});

viewModel.get();

/**
 * type Presenter = {
 * 	success(response: SuccessResponseModel): void;
 * 	fail(response: ErrorResponseModel): void;
 * }
 *
 * type GetPropertiesPresenter = Presenter & {
 * 	notFound(): void;
 * 	...
 * }
 */

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

/**
 * A view model is tied to a use case interactor (in constrast to gateway data side tied to an entity).
 * It's intented to store and manage UI-related data in a lifecycle conscious way.
 */
export const createGetPropertiesViewModel = (): GetPropertiesViewModel => {
	let viewModel: GetPropertiesDTO = [];

	return {
		get() {
			return viewModel;
		},
		ok(entities) {
			viewModel = entities.map((entity) => ({
				price: entity.price,
			}));

			return viewModel;
		},
		fail() {
			return;
		},
	};
};
