import { Observable } from './Observable';
import { IObservable } from './IObservable';
import { IObserver } from './IObserver';
import { LinkedList } from './CommonHelpers';
import { ObservableBase } from './ObservableBase';

export class OperatorBase extends ObservableBase {
	fn: (item: any) => any;
	observable: IObservable;
	pipeHead?: LinkedList<IObservable>;

	constructor(fn: (item: any) => any) {
		super();
		this.fn = fn;
		this.observable = new Observable();
	}

	subscribe(observer: IObserver) {
		this.observable.subscribe(observer);
	}

	emit(item: any) {
		this.observable.emit(this.fn(item));
	}

	pipe(...observables: IObservable[]): never {
		// For now this pipe does nothing
		throw new Error('Nested pipes are unsupported.');
	}
}
