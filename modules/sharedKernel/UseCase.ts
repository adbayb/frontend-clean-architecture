export type UseCaseInputPort<
	RequestModel extends Record<string, unknown>,
	Presenter extends UseCaseOutputPort
> = (requestModel: RequestModel, presenter: Presenter) => void | Promise<void>;

export type UseCaseOutputPort<
	ResponseModel extends
		| Record<string, unknown>
		| Array<Record<string, unknown>> = {}
> = {
	ok(responseModel: ResponseModel): void;
	/**
	 * Generic error presentation handler
	 * @param message The contextual error message
	 */
	fail(message: string): void;
	empty(): void;
	// notFound(): void; // @note: other contract can be added to present common errors (eg. related to http code)
	// forbidden(): void; // ...
};
