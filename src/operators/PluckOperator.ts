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
 * const observable = new tx.Observable();
 * observable
 * 	.pipe(tx.take(1), tx.pluck('email'))
 * 	.subscribe(new tx.Observer(console.log));
 * observable.emit({ name: 'King', email: 'email@kingdom' });
 * observable.emit({ name: 'Queen', email: 'email@queendom' });
 * ```
 *
 * Output:
 * email@kingdom
 *
 * @class
 * @noInheritDoc
 */
export class PluckOperator extends OperatorBase {
	/**
	 * Constructs the `PluckOperator`
	 */
	/* istanbul ignore next */
	constructor(private propName: string = '') {
		super((item) => item);
		if (propName === '') {
			throw new Error('Pluck operator expects a property name');
		}
	}

	/**
	 *
	 * Emits the property of an item as specified by the propName in the PluckOperator's constructor.
	 *
	 * @param {any} item The item
	 */
	emit(item: any) {
		this.observable.emit(item[this.propName]);
	}
}
