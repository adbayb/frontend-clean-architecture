// @todo

import { createObservable } from "../../sharedKernel/Observable";
import {
	GetPropertiesInputPort,
	GetPropertiesOutputPort,
	GetPropertiesResponseModel,
} from "../core/useCases/GetProperties";

export const createListingViewModel = () => {
	const state = {
		isLoading: createObservable(false), // @todo: simulate delay
		properties: createObservable<GetPropertiesResponseModel>([]),
		error: createObservable(""),
	};

	return {
		// @section: states
		state,
		// @section: actions
		async getProperties(executeUseCase: GetPropertiesInputPort) {
			const presenter: GetPropertiesOutputPort = {
				ok(responseModel) {
					state.error.value = "";
					state.properties.value = responseModel;
				},
				fail(error) {
					state.error.value = error;
				},
				empty() {
					// @note: the message definition are defined in the presentation layer and not in the domain layer
					// to allow different value affectation depending on the targetted output system
					// (for GUI, a string message could be enough, whereas a message broker / REST API
					// will need more structurated data such as error id...)
					// TLDR; The domain layer's responsibility is to give meaning about the presentation case (eg. "empty", "notFound", ...)
					// and let the presentation layer manage its representation depending on the targetted system.
					state.error.value = "Empty properties";
				},
			};

			return await executeUseCase({}, presenter);
		},
		// @todo: saveToFavorite
	};
};
