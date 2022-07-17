export type UseCaseInputPort<
	RequestModel extends Record<string, unknown> | void = void
> = RequestModel extends undefined
	? () => void | Promise<void>
	: (input: RequestModel) => void | Promise<void>;

export type UseCaseOutputPort<
	ResponseModel extends Record<string, unknown> | Array<Record<string, unknown>>
> = {
	ok(responseModel: ResponseModel): void;
	fail(message: string): void;
	// notFound(): void; // @note: other contract can be added to present common errors (eg. related to http code)
	// empty(): void;
	// forbidden(): void; // ...
};
