// const pipe = (...fns) => (item) => fns.reduce((acc, fn) => fn(acc), item);

import { MapOperator } from './MapOperator';
import { FilterOperator } from './FilterOperator';
import { IObservable } from './Observable';

export const tap: <T>(fn: Function) => (item: T) => T = (fn) => (item) => {
	fn(item);
	return item;
};

export const map: <T>(fn: Function) => IObservable<T> = (fn) => {
	return new MapOperator(fn);
};

export const filter: <T>(fn: Function) => IObservable<T> = (fn) => {
	return new FilterOperator(fn);
};

export const pipe: <T>(...fns: Function[]) => (item: T) => T = (...fns) => (item) => {
	return fns.reduce(<T>(acc: T, fn: Function) => fn(acc), item);
};
