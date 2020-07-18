import { OperatorBase } from './OperatorBase';

/**
 * The default behaviour of the `OperatorBase` is `MapOperator`. Therefore, this class is just a
 * placeholder.
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
 *
 * @class
 * @noInheritDoc
 */
export class MapOperator extends OperatorBase {}
