import { Observable } from '../Observable';
import { IObservable } from '../IObservable';
import { IObserver } from '../IObserver';
import { LinkedList } from '../CommonHelpers';
import { ObservableBase } from '../ObservableBase';

/**
 * This class provides you the basis for your own operators and operators that are included in
 * this package already. Operators inherit from `ObservableBase`, so they have same methods and
 * properties.
 *
 * Basic usage example:
 *
 * ```ts
 * class Squarer : OperatorBase {
 * 	emit (item: number) {
 * 		this.observable.emit(item * item);
 * 	}
 * }
 * ```
 *
 * @class
 */
export class OperatorBase extends ObservableBase {
	fn: (item: any) => any;
	observable: IObservable;
	pipeHead?: LinkedList<IObservable>;

	constructor(fn: (item: any) => any) {
		super();
		this.fn = fn;
		this.observable = new Observable();
	}

	/** @inheritdoc */
	subscribe(observer: IObserver) {
		this.observable.subscribe(observer);
	}

	/** @inheritdoc */
	emit(item: any) {
		this.observable.emit(this.fn(item));
	}

	/** @inheritdoc */
	pipe(...observables: IObservable[]): never {
		// For now this pipe does nothing
		throw new Error('Nested pipes are unsupported.');
	}
}
