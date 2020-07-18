// const pipe = (...fns) => (item) => fns.reduce((acc, fn) => fn(acc), item);

import { MapOperator } from './operators/MapOperator';
import { FilterOperator } from './operators/FilterOperator';
import { IObservable } from './IObservable';

export type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

/**
 * Execute the specified function on an incoming item and also returns the same item back.
 *
 * Basic usage example:
 *
 * ```ts
 * const observable = new Observable();
 * const observer = new Observer(
 * pipe(
 * 	tap((num) => console.log(num * 3)),
 * 	tap((num) => console.log(num * 4))
 * ));
 * observable.subscribe(observer);
 * observable.emit(10);
 * ```
 *
 * Output:
 * 30
 * 40
 *
 * @param T item The item
 * @return T The item
 */
export const tap: (fn: (item: any) => any) => (item: any) => any = (fn) => (
	item
) => {
	fn(item);
	return item;
};

/**
 * Executes standard 1:1 map function on an incoming item and returns the computed item back.
 *
 * Basic usage example:
 *
 * ```ts
 * const observable = new Observable();
 * const observer = new Observer(
 * pipe(
 * 	map((num) => num * 3),
 * 	(num) => console.log(num * 4)
 * ));
 * observable.subscribe(observer);
 * observable.emit(10);
 * ```
 *
 * Output:
 * 120
 *
 * @param T item The item
 * @return T The item
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
 * const observable = new Observable();
 * const observer = new Observer(
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
 * @param T item The item
 * @return T The item
 */
export const filter: (fn: (item: any) => any) => IObservable = (fn) => {
	return new FilterOperator(fn);
};

/**
 * Pipes multiple observer operations together.
 *
 * Basic usage example:
 *
 * ```ts
 * const observable = new Observable();
 * const observer = new Observer(
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
 * @param T item The item
 * @return T The item
 */
// tslint:disable-next-line:ban-types
export const pipe: (...fns: Function[]) => (item: any) => any = (...fns) => (
	item
) => {
	// tslint:disable-next-line:ban-types
	return fns.reduce((acc: any, fn: Function) => fn(acc), item);
};
