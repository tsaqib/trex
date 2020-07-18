import { OperatorBase } from './OperatorBase';

/**
 * This operator runs the data items through the predicate you pass on to it and if it satisfies
 * the predicate, it returns back the item. As a result, the subscribers get the item on emit.
 *
 * Basic usage example:
 *
 * ```ts
 * const observer = new TRex.Observer((num) => {
 * 	console.log(num);
 * });
 * observable
 * 	.pipe(
 * 		TRex.take(3)
 * 	)
 * .subscribe(observer);
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
	 * Emits the item as long as the current count of items doesn't exceed the total allocated by `count`.
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
