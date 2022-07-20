type Observer<Value> = (updatedValue: Value) => void;

export const createObservable = <Value>(value: Value) => {
	let observer: Observer<Value> | null = null;
	let currentValue = value;

	return {
		observe(callback: Observer<Value>) {
			// @todo: collection of observers
			observer = callback;
		},
		unobserve() {
			observer = null;
		},
		get value() {
			return currentValue;
		},
		set value(nextValue) {
			if (observer && currentValue !== nextValue) {
				observer(nextValue);
			}

			currentValue = nextValue;
		},
	};
};
