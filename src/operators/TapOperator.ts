import { OperatorBase } from './OperatorBase';

/**
 * This operator runs a data item through the function you pass on to it, but returns the
 * original value.
 *
 * Basic usage example:
 *
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 *
 * const square = (num) => num * num;
 * const observable = new tx.Observable();
 * const observer = new tx.Observer(console.log);
 * observable.pipe(tx.tap(square)).subscribe(observer);
 * observable.emit(10);
 * 
 * // Output: 10
 * ```
 * 
 * @class
 * @noInheritDoc
 */
export class TapOperator extends OperatorBase {
	/**
	 *
	 * Applies the specified fucntion on the item, but returns the original value.
	 *
	 * @param {any} item The item
	 */
	emit(item: any) {
		this.fn(item);
		this.observable.emit(item);
	}
}
