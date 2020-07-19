import { MapOperator } from './operators/MapOperator';
import { FilterOperator } from './operators/FilterOperator';
import { TakeOperator } from './operators/TakeOperator';
import { PluckOperator } from './operators/PluckOperator';
import { IObservable } from './IObservable';

export type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

/**
 * Executes standard 1:1 map function on an incoming item and returns the computed item back.
 *
 * Basic usage example:
 *
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 *
 * const observer = new tx.Observer(console.log);
 * const observable = new tx.Observable();
 * observable
 * 	.pipe(
 * 		tx.map((num: number) => num * 2),
 * 		tx.map((num: number) => num * 3)
 * 	)
 * .subscribe(observer);
 * observable.emit(10);
 * ```
 *
 * Output:
 * 60
 *
 * @param {Function} fn The function to apply on the item
 */
export const map: (fn: (item: any) => any) => IObservable = (fn) => {
	return new MapOperator(fn);
};

/**
 * Returns an item only when the specified predicate is true.
 *
 * Basic usage example:
 *
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 *
 * const observable = new tx.Observable();
 * const observer = new tx.Observer(
 * pipe(
 * 	filter((num) => num < 15),
 * 	(num) => console.log(num * 4)
 * ));
 * observable.subscribe(observer);
 * observable.emit(10);
 * observable.emit(20);
 * ```
 *
 * Output:
 * 40
 *
 * @param {Function} fn The predcate to check with the item
 */
export const filter: (fn: (item: any) => any) => IObservable = (fn) => {
	return new FilterOperator(fn);
};

/**
 * Returns up to a specified number of items.
 *
 * Basic usage example:
 *
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 *
 * const observer = new tx.Observer(console.log);
 * observable.pipe(tx.take(3)).subscribe(observer);
 * observable.emit([10, 20, 30, 40, 50, 60]);
 * ```
 *
 * Output:
 * 10
 * 20
 * 30
 *
 * @param {number} count The total number of items will be allowed to pass through further
 */
export const take: (count: number) => IObservable = (count: number) => {
	return new TakeOperator(count);
};

/**
 * Returns the specified property of a value.
 *
 * Basic usage example:
 *
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 *
 * const observable = new tx.Observable();
 * observable
 * 	.pipe(tx.take(1), tx.pluck('email'))
 * 	.subscribe(new tx.Observer(console.log));
 * observable.emit({ name: 'King', email: 'email@kingdom' });
 * observable.emit({ name: 'Queen', email: 'email@queendom' });
 * ```
 *
 * Output:
 * email@kingdom
 *
 * @param {string} propName The name of the property to return from the item
 */
export const pluck: (propName: string) => IObservable = (propName: string) => {
	return new PluckOperator(propName);
};
