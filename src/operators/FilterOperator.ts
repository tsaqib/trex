import { OperatorBase } from './OperatorBase';

/**
 * This operator runs the data items through the predicate you pass on to it and if it satisfies
 * the predicate, it returns back the item. As a result, the observers get the item on emit.
 *
 * Basic usage example:
 *
 * ```ts
 * import * as tx from '@tsaqib/trex';
 * // or CommonJS: const tx = require("@tsaqib/trex");
 *
 * const observer = new tx.Observer(console.log);
 * observable
 * 	.pipe(
 * 		tx.map((num) => num * 3),
 * 		tx.filter((num) => num > 10)
 * 	)
 * .subscribe(observer);
 * observable.emit(10);
 * ```
 * @class
 * @noInheritDoc
 */
export class FilterOperator extends OperatorBase {
	/**
	 *
	 * Applies the specified predicate on the item and returns it when the predicate returns true.
	 *
	 * @param {any} item The item
	 */
	emit(item: any) {
		if (this.fn(item)) {
			this.observable.emit(item);
		}
	}
}
