import { OperatorBase } from './OperatorBase';

/**
 * This operator keeps the count of the items it has encountered and only allow them to pass
 * through as long as it does not exceed a specified total count.
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
 * @class
 * @noInheritDoc
 */
export class TakeOperator extends OperatorBase {
	total: number = 0;
	/**
	 * Constructs the `TakeOperator`
	 */
	/* istanbul ignore next */
	constructor(private count: number = 0) {
		super((item) => item);
	}

	/**
	 *
	 * Emits the item as long as the current count of items doesn't exceed the total allocated
	 * by `count`.
	 *
	 * @param {any} item The item
	 */
	emit(item: any) {
		this.total++;
		if (this.total <= this.count) {
			this.observable.emit(item);
		}
	}
}
