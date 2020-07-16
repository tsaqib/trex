import { IObserver } from './Observer';
import { LinkedList } from './CommonHelpers';
import { IObservable } from './IObservable';
import { ObservableContext } from './ObservableContext';

export class ObservableBase implements IObservable {
	observers: IObserver[];
	pipeHead?: LinkedList<IObservable>;

	constructor() {
		this.observers = [];
		this.pipeHead = undefined;
	}

	subscribe(observer: IObserver) {
		this.observers.push(observer);
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
		// For now this pipe does nothing
		//throw new Error('Multicasts are unsupported in operators.');

		// End of pipe: if this.pipeHead is present; attach it with
		// the observer and store in ObservableContext
		// There may not be a pipeHead at all
		observers.forEach((observer) => {
			this.observers.push(observer);
			ObservableContext.addMap(observer, this, this.pipeHead);
		});
	}

	destroy() {
		this.observers.splice(0, this.observers.length);
	}
}
