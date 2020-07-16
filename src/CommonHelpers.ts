// const pipe = (...fns) => (item) => fns.reduce((acc, fn) => fn(acc), item);

import { MapOperator } from './MapOperator';
import { FilterOperator } from './FilterOperator';
import { IObservable } from './IObservable';

export type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};

export const tap: (fn: (item: any) => any) => (item: any) => any = (fn) => (
	item
) => {
	fn(item);
	return item;
};

export const map: (fn: (item: any) => any) => IObservable = (fn) => {
	return new MapOperator(fn);
};

export const filter: (fn: (item: any) => any) => IObservable = (fn) => {
	return new FilterOperator(fn);
};

// tslint:disable-next-line:ban-types
export const pipe: (...fns: Function[]) => (item: any) => any = (...fns) => (
	item
) => {
	// tslint:disable-next-line:ban-types
	return fns.reduce((acc: any, fn: Function) => fn(acc), item);
};
