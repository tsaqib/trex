import { IObserver } from './Observer';

type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

export interface IObservable<T> {
	subscribe(observer: IObserver<T>): void;
	emit(item: T): void;
	pipeHead?: LinkedList<IObservable<T>>;
	pipe?(...observables: IObservable<T>[]): IObservable<T>;
	destroy?(): void;
}

export class Observable<T> implements IObservable<T> {
	private observers: IObserver<T>[];
	pipeHead?: LinkedList<IObservable<T>>;

	constructor() {
		this.observers = [];
		this.pipeHead = undefined;
	}

	subscribe(observer: IObserver<T>) {
		// Why is this.pipeHead always undefined here despite setting at line# 59?
		this.observers.push(observer);
	}

	emit(item: T) {
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

	pipe(...observables: IObservable<T>[]) {
		let linkedListTail: LinkedList<IObservable<T>> = {
			value: <IObservable<T>>this
		};
		let linkedListHead = linkedListTail;
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

	destroy() {
		this.observers.splice(0, this.observers.length);
	}
}
