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
	 * @param {IObserver} observer The `Observer` instance to be subscribed for update
	 * @returns void
	 * @memberof IObservable
	 */
	subscribe(observer: IObserver): void;

	/**
	 * Unsubscribes an `Observer` instance
	 *
	 * @param {IObserver} observer The `Observer` instance to be subscribed for update
	 * @returns void
	 * @memberof IObservable
	 */
	unsubscribe(observer: IObserver): void;

	/**
	 * Emits an item to the stream
	 *
	 * @param {any} item The item to stream
	 * @returns void
	 * @memberof IObservable
	 */
	emit(item: any): void;

	/**
	 * Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.
	 *
	 * @type {LinkedList<IObservable>} The head of the linked list
	 * @memberof IObservable
	 */
	pipeHead?: LinkedList<IObservable>;

	/**
	 * Pipes a series of operations per item in the stream
	 *
	 * @param {IObservable[]} observables The item to stream
	 * @returns IObservable
	 * @memberof IObservable
	 */
	pipe(...observables: IObservable[]): IObservable;

	/**
	 * Subscribes an array of observers in one go, typically followed by a pipe.
	 *
	 * @param {IObserver[]} observers An array of `Observer` to update
	 * @returns void
	 * @memberof IObservable
	 */
	multicast(...observers: IObserver[]): void;

	/**
	 * Destroyes an `Observable` along with all its subscribers.
	 *
	 * @returns void
	 * @memberof IObservable
	 */
	destroy?(): void;
}
