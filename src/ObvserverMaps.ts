import { LinkedList } from './CommonHelpers';
import { IObservable } from './IObservable';
import { IObserver } from './IObserver';

type ObserverMap = {
	observer: IObserver;
	observable: IObservable;
	chainHead?: LinkedList<IObservable>;
};

/**
 * This is an internal class and not meant for public use. This class maintains a list of
 * linked list of observable-observer internal call chains.
 *
 * ** Warning: You should never use this class.
 *
 * @class
 * @noInheritDoc
 */
export class ObserverMaps {
	private constructor() {}
	public static maps: ObserverMap[] = [];

	/*
	 * Prints the current ObserverMaps for debugging purposes.
	 *
	 * @memberof ObserverMaps
	 * @static
	 */
	// public static print(): void {
	// 	console.log('Maps', this.maps);
	// }

	/**
	 * Adds a tuple of observer, observable and the head of the call's linked list.
	 *
	 * @param {IObserver} observer The observer
	 * @param {IObservable} observer The observable
	 * @param {LinkedList<IObservable>} observer The linked list
	 * @memberof ObserverMaps
	 * @static
	 */
	public static add(
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
	 * @memberof ObserverMaps
	 * @static
	 */
	public static get(observer: IObserver): ObserverMap[] | undefined {
		return this.maps.filter((m) => m.observer === observer);
	}

	/**
	 * Removes a tuple for a given `ObserverMap` instance
	 *
	 * @param {ObserverMap} observerMap The ObserverMap to remove
	 * @memberof ObserverMaps
	 * @static
	 */
	public static remove(map: ObserverMap): void {
		this.maps.splice(this.maps.indexOf(map), 1);
	}
}
