import { IObserver } from './IObserver';

/**
 * The `Observer` gives you the basis for an observer. A function or pipe can be passed onto
 * the constructor or you can subclass the class itself to make your own observer.
 *
 * @class
 * @inheritdoc
 * @implements {IObservable}
 */
export class Observer implements IObserver {
	next: (item: any) => void;
	error?: (err: any) => void;

	/**
	 * Constructs an `Observer`.
	 *
	 * Basic usage example:
	 *
	 * ```ts
	 * 	const observer = new Observer(
	 * 		(item: string) => console.log(item),
	 * 		(err: any) => console.error(err);
	 * 	)
	 * ```
	 *
	 * @constructor
	 * @param {next: (item: any)} next - The function t invoke on data arrival
	 * @param {error: (err: any)} error - The error handler function
	 */
	constructor(next: (item: any) => void, error?: (err: any) => void) {
		this.next = next;
		this.error = error;
	}
}
