import { IObserver } from './IObserver';
import { LinkedList } from './CommonHelpers';
import { IObservable } from './IObservable';
import { ObserverMaps } from './ObvserverMaps';
import { OperatorBase } from './operators/OperatorBase';

/**
 * The `ObservableBase` class, implements `IObservable`, but is not for public instantiation.
 * The first class you must instantiate is the `Observable` which is a placeholder for
 * `ObservableBase`.
 *
 * ** Warning: You should only subclass this class.
 *
 * @class
 * @inheritdoc
 * @implements {IObservable}
 */
export class ObservableBase implements IObservable {
	private observers: IObserver[];
	pipeHead?: LinkedList<IObservable>;

	/**
	 * Constructs an `ObservableBase`.
	 *
	 * ** Warning: You should use this only by subclassing.
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
		const maps = ObserverMaps.get(observer);
		if (maps) {
			maps.forEach((om) => {
				let head = om.chainHead;
				while (head?.next) {
					head = head.next;
				}

				const op = head?.value as OperatorBase;
				ObserverMaps.remove(om);
				op.observable.unsubscribe(observer);
				pipeRefDeleted = true;
			});
		}

		if (!pipeRefDeleted) {
			this.observers.splice(this.observers.indexOf(observer), 1);
		}
	}

	emit(item: any) {
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
			}
		});
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
		for (const observable of observables) {
			linkedListTail.value.subscribe({
				next: (item) => observable.emit(item)
			});
			linkedListTail.next = { value: observable };
			linkedListTail = linkedListTail.next;
		}

		linkedListTail.value.pipeHead = linkedListHead;
		return linkedListTail.value;
	}

	multicast(...observers: IObserver[]) {
		// End of pipe: if this.pipeHead is present; attach it with
		// the observer and store in ObservableContext
		// There may not be a pipeHead at all
		observers.forEach((observer) => {
			this.subscribe(observer);
			if (this.pipeHead) {
				ObserverMaps.add(observer, this, this.pipeHead);
			}
		});
	}

	destroy() {
		// TODO: also clean up using ObserverMaps
		this.observers.splice(0, this.observers.length);
	}
}
