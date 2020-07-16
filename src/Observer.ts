export interface IObserver<T> {
	next: (item: T) => void;
	error?(err: any): void;
}

export class Observer<T> implements IObserver<T> {
	next: (item: T) => void;
	error?: (err: any) => void;

	constructor(next: (item: T) => void, error?: any) {
		this.next = next;
		this.error = error;
	}
}
