import { IObservable, Observable } from './Observable';
import { IObserver } from './Observer';

export class OperatorBase<T> implements IObservable<T> {
	fn: Function;
	observable: IObservable<T>;

	constructor(fn: Function) {
		this.fn = fn;
		this.observable = new Observable<T>();
	}

	subscribe(observer: IObserver<T>) {
		this.observable.subscribe(observer);
	}

	emit(item: T) {
		this.observable.emit(this.fn(item));
	}
}
