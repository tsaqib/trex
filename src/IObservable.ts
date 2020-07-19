import { IObserver } from './IObserver';
import { LinkedList } from './Shorthands';

/**
 * The interface behind the `Observable`, maintains the contract for all observables.
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
	 * import * as tx from '@tsaqib/trex';
	 * // or CommonJS: const tx = require("@tsaqib/trex");
	 *
	 * // Observer is an implementation of IObservable
	 * const observable = new tx.Observable();
	 * const observer = new tx.Observer(console.log);
	 * observable.subscribe(observer);
	 * observable.emit(10);
	 * ```
	 *
	 * @param {IObserver} observer The `Observer` instance to be subscribed for update
	 * @memberof IObservable
	 */
	subscribe(observer: IObserver): void;

	/**
	 * Unsubscribes an `Observer` instance
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * import * as tx from '@tsaqib/trex';
	 * // or CommonJS: const tx = require("@tsaqib/trex");
	 *
	 * // Observer is an implementation of IObservable
	 * const observable = new tx.Observable();
	 * const observer = new tx.Observer(console.log);
	 * observable.subscribe(observer);
	 * observable.emit(10);
	 * observable.unsubscribe(observer);
	 * ```
	 *
	 * @param {IObserver} observer The `Observer` instance to be subscribed for update
	 * @memberof IObservable
	 */
	unsubscribe(observer: IObserver): void;

	/**
	 * Emits an item to the stream
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * import * as tx from '@tsaqib/trex';
	 * // or CommonJS: const tx = require("@tsaqib/trex");
	 *
	 * // Observer is an implementation of IObservable
	 * const observable = new tx.Observable();
	 * const observer = new tx.Observer(console.log);
	 * observable.subscribe(observer);
	 * observable.emit(10);
	 * ```
	 *
	 * @param {any | any[]} item The item(s) to stream; can be an array, too
	 * @memberof IObservable
	 */
	emit(item: any | any[]): void;

	/**
	 * ** Warning: Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.
	 *
	 * @type {LinkedList<IObservable>} The head of the linked list
	 * @memberof IObservable
	 */
	pipeHead?: LinkedList<IObservable>;

	/**
	 * Pipes a series of operations per item in the stream. All operators must be inside a pipe.
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * import * as tx from '@tsaqib/trex';
	 * // or CommonJS: const tx = require("@tsaqib/trex");
	 *
	 * // Observer is an implementation of IObservable
	 * const observable = new tx.Observable();
	 * observable
	 * 	.pipe(
	 * 		map(x => x * 2),
	 * 		filter(x => x > 5)
	 * 	)
	 * 	.subscribe(new tx.Observer(console.log));
	 * observable.emit(50);
	 * ```
	 *
	 * @param {IObservable[]} observables The observables that form a chain of actions.
	 * @memberof IObservable
	 */
	pipe(...observables: IObservable[]): IObservable;

	/**
	 * Subscribes an array of observers in one go, typically followed by a pipe.
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * import * as tx from '@tsaqib/trex';
	 * // or CommonJS: const tx = require("@tsaqib/trex");
	 *
	 * const observable1 = new tx.Observer(console.log);
	 * const observable2 = new tx.Observer((x) => console.log(x * x));
	 *
	 * // Observer is an implementation of IObservable
	 * const observable = new tx.Observable();
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
	 * @memberof IObservable
	 */
	multicast(...observers: IObserver[]): void;

	/**
	 * Destroys an `Observable` along with all its subscribers.
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * import * as tx from '@tsaqib/trex';
	 * // or CommonJS: const tx = require("@tsaqib/trex");
	 *
	 * // Observer is an implementation of IObservable
	 * const observable = new tx.Observable();
	 * const observer = new tx.Observer((num) => {
	 * 	console.log(num / 2);
	 * })
	 * .subscribe(new tx.Observer((x) => console.log(x)));
	 * observable.emit(10);
	 * observable.destroy();
	 * ```
	 *
	 * @memberof IObservable
	 */
	destroy?(): void;
}
