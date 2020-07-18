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
 * @noInheritDoc
 */
export class OperatorBase extends ObservableBase {
	fn: (item: any) => any;
	observable: IObservable;
	pipeHead?: LinkedList<IObservable>;

	/**
	 * Constructs an `OperatorBase`.
	 *
	 * ** Warning: You should use this only by subclassing.
	 *
	 * @constructor
	 * @param {function} fn The function to apply to the item
	 */
	constructor(fn: (item: any) => any) {
		super();
		this.fn = fn;
		this.observable = new Observable();
	}

	subscribe(observer: IObserver) {
		this.observable.subscribe(observer);
	}

	emit(item: any | any[]) {
		this.observable.emit(this.fn(item));
	}

	pipe(...observables: IObservable[]): never {
		// For now this pipe does nothing
		throw new Error('Nested pipes are unsupported.');
	}
}
