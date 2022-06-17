export interface Presenter {
	notify<State>(state: State): void;
}
