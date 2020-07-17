/**
 * The interface behind the `Observer`, maintains the contract for all observers.
 *
 * @interface
 */
export interface IObserver {
	/**
	 * Whenever a new item is available in the stream, the `next` function is called with that.
	 *
	 * @param {any} item The item newly arrived in the stream.
	 * @returns void
	 * @memberof IObserver
	 */
	next: (item: any) => void;

	/**
	 * The error handler for the potential exception occured inside the `next` function.
	 *
	 * @param {any} err The error object.
	 * @returns void
	 * @memberof IObserver
	 */
	error?(err: any): void;
}
