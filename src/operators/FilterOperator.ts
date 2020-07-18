import { OperatorBase } from './OperatorBase';

/**
 * This operator runs the data items through the predicate you pass on to it and if it satisfies
 * the predicate, it returns back the item. As a result, the subscribers get the item on emit.
 * @class
 *
 * Basic usage example:
 *
 * ```ts
 * const observer = new TRex.Observer((num) => {
 * 	console.log(num / 2);
 * });
 * observable
 * 	.pipe(
 * 		TRex.map((num) => num * 2),
 * 		TRex.map((num) => num * 3),
 * 		TRex.filter((num) => num > 50)
 * 	)
 * .subscribe(observer);
 * observable.emit(10);
 * ```
 */
export class FilterOperator extends OperatorBase {
	emit(item: any) {
		if (this.fn(item)) {
			this.observable.emit(item);
		}
	}
}
