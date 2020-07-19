import { LinkedList } from './Shorthands';
import { IObservable } from './IObservable';
import { IObserver } from './IObserver';

type ObserverMap = {
	observer: IObserver;
	observable: IObservable;
	chainHead?: LinkedList<IObservable>;
};

/**
 * This is an internal class and not meant for public use, maintains internal states
 *
 * ** Warning: You should never use this class.
 *
 * @class
 * @noInheritDoc
 */
export class TxContext {
	/* istanbul ignore next */
	private constructor() {}
	public static maps: ObserverMap[] = [];

	/*
	 * Prints the current TxContext for debugging purposes.
	 *
	 * @memberof TxContext
	 * @static
	 */
	/* istanbul ignore next */
	public static print(): void {
		console.log('Maps', this.maps);
	}

	/**
	 * Adds a tuple of observer, observable and the head of the call's linked list.
	 *
	 * @param {IObserver} observer The observer
	 * @param {IObservable} observer The observable
	 * @param {LinkedList<IObservable>} observer The linked list
	 * @memberof TxContext
	 * @static
	 */
	public static addMap(
		observer: IObserver,
		observable: IObservable,
		chainHead?: LinkedList<IObservable>
	): void {
		this.maps.push({ observer, observable, chainHead });
	}

	/**
	 * Gets a tuple list of observer, observable and the head of the call's linked list for a given
	 * `IObserver`
	 *
	 * @param {IObserver} observer The observer to lookup
	 * @memberof TxContext
	 * @static
	 */
	public static getMap(observer: IObserver): ObserverMap[] | undefined {
		return this.maps.filter((m) => m.observer === observer);
	}

	/**
	 * Removes a tuple for a given `ObserverMap` instance
	 *
	 * @param {ObserverMap} observerMap The ObserverMap to remove
	 * @memberof TxContext
	 * @static
	 */
	public static removeMap(map: ObserverMap): void {
		this.maps.splice(this.maps.indexOf(map), 1);
	}
}
