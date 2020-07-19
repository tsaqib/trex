import { IObserver } from './IObserver';
import { LinkedList } from './Shorthands';
import { IObservable } from './IObservable';
import { TxContext } from './TxContext';
import { OperatorBase } from './operators/OperatorBase';

/**
 * An `Observable` listens to the streams of data and passes on to its observers. 
 * You use the `subscribe` function to subscribe and `emit` function to add a new data to 
 * the stream.
 * 
 * Basic usage example:
 * 
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 * 
 * const observable = new Observable();
 * ```
 *
 * @class
 * @inheritdoc
 * @implements {IObservable}
 */
export class Observable implements IObservable {
	private observers: IObserver[];
	pipeHead?: LinkedList<IObservable>;

	/**
	 * Constructs an `Observable`, which is an implementation of `IObservable`.
	 *
	 * @constructor
	 */
	constructor() {
		this.observers = [];
		this.pipeHead = undefined;
	}

	subscribe(observer: IObserver) {
		if (this.observers.indexOf(observer) < 0) {
			this.observers.push(observer);
		}
	}

	unsubscribe(observer: IObserver) {
		let pipeRefDeleted = false;
		const maps = TxContext.getMap(observer);

		/* istanbul ignore next */
		if (maps) {
			maps.forEach((om) => {
				let head = om.chainHead;
				while (head?.next) {
					head = head.next;
				}

				const op = head?.value as OperatorBase;
				TxContext.removeMap(om);
				op.observable.unsubscribe(observer);
				pipeRefDeleted = true;
			});
		}

		if (!pipeRefDeleted) {
			this.observers.splice(this.observers.indexOf(observer), 1);
		}
	}

	emit(items: any | any[]) {
		const emit = (item: any) => {
			this.observers.forEach((observer) => {
				if (observer.next && typeof observer.next === 'function') {
					if (observer.error) {
						try {
							observer.next(item);
						} catch (err) {
							observer.error(err);
						}
					} else {
						observer.next(item);
					}
				} else {
					throw new Error(
						'One of the observers did not have a next function defined.'
					);
				}
			});
		};

		if (Array.isArray(items)) {
			items.forEach((item) => emit(item));
		} else {
			emit(items);
		}
	}

	pipe(...observables: IObservable[]) {
		if (observables.length === 0) {
			throw new Error('Empty pipes are unsupported.');
		}

		// Beginning of a pipe
		let linkedListTail: LinkedList<IObservable> = {
			value: this as IObservable
		};
		const linkedListHead = linkedListTail;
		observables.forEach((observable) => {
			linkedListTail.value.subscribe({
				next: (item) => observable.emit(item)
			});
			linkedListTail.next = { value: observable };
			linkedListTail = linkedListTail.next;
		});

		linkedListTail.value.pipeHead = linkedListHead;
		return linkedListTail.value;
	}

	multicast(...observers: IObserver[]) {
		// End of pipe: if this.pipeHead is present; attach it with
		// the observer and store in TxContext
		// There may not be a pipeHead at all
		observers.forEach((observer) => {
			this.subscribe(observer);
			if (this.pipeHead) {
				TxContext.addMap(observer, this, this.pipeHead);
			}
		});
	}

	/* istanbul ignore next */
	destroy() {
		// TODO: also clean up using TxContext
		this.observers.splice(0, this.observers.length);
	}
}
