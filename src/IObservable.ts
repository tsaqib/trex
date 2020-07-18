import { IObserver } from './IObserver';
import { LinkedList } from './CommonHelpers';

/**
 * The interface behind the `ObservableBase`, maintains the contract for all observables.
 *
 * @interface
 */
export interface IObservable {
	/**
	 * Subscribes an `Observer` instance
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * const observable = new Observable();
	 * const observer = new Observer((num) => {
	 * 	console.log(num / 2);
	 * });
	 * observable.subscribe(observer);
	 * observable.emit(10);
	 * ```
	 *
	 * @param {IObserver} observer The `Observer` instance to be subscribed for update
	 * @returns void
	 * @memberof IObservable
	 */
	subscribe(observer: IObserver): void;

	/**
	 * Unsubscribes an `Observer` instance
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * const observable = new Observable();
	 * const observer = new Observer((num) => {
	 * 	console.log(num / 2);
	 * });
	 * observable.subscribe(observer);
	 * observable.emit(10);
	 * observable.unsubscribe(observer);
	 * ```
	 *
	 * @param {IObserver} observer The `Observer` instance to be subscribed for update
	 * @returns void
	 * @memberof IObservable
	 */
	unsubscribe(observer: IObserver): void;

	/**
	 * Emits an item to the stream
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * const observable = new Observable();
	 * const observer = new Observer((num) => {
	 * 	console.log(num);
	 * });
	 * observable.subscribe(observer);
	 * observable.emit(10);
	 * ```
	 *
	 * @param {any} item The item to stream
	 * @returns void
	 * @memberof IObservable
	 */
	emit(item: any): void;

	/**
	 * ** Warning: Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.
	 *
	 * @type {LinkedList<IObservable>} The head of the linked list
	 * @memberof IObservable
	 */
	pipeHead?: LinkedList<IObservable>;

	/**
	 * Pipes a series of operations per item in the stream
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * const observable = new Observable();
	 * observable
	 * 	.pipe(
	 * 		map(x => x * 2),
	 * 		filter(x => x > 5)
	 * 	)
	 * 	.subscribe(new Observer((x) => console.log(x)));
	 * observable.emit(50);
	 * ```
	 *
	 * @param {IObservable[]} observables The observables that form a chain of actions.
	 * @returns IObservable
	 * @memberof IObservable
	 */
	pipe(...observables: IObservable[]): IObservable;

	/**
	 * Subscribes an array of observers in one go, typically followed by a pipe.
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * const observable1 = new Observer((x) => console.log(x));
	 * const observable2 = new Observer((x) => console.log(x * x));
	 * const observable = new Observable();
	 * observable
	 * 	.pipe(
	 * 		map(x => x * 2),
	 * 		filter(x => x > 5)
	 * 	)
	 * 	.multicast(observer1, observer2);
	 * observable.emit(50);
	 * ```
	 *
	 * @param {IObserver[]} observers An array of `Observer` to update
	 * @returns void
	 * @memberof IObservable
	 */
	multicast(...observers: IObserver[]): void;

	/**
	 * Destroys an `Observable` along with all its subscribers.
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * const observable = new Observable();
	 * const observer = new Observer((num) => {
	 * 	console.log(num / 2);
	 * })
	 * .subscribe(new Observer((x) => console.log(x)));
	 * observable.emit(10);
	 * observable.destroy();
	 * ```
	 *
	 * @returns void
	 * @memberof IObservable
	 */
	destroy?(): void;
}
