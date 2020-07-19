import { OperatorBase } from './OperatorBase';

/**
 * Executes standard 1:1 map function on an incoming item and returns the computed item back.
 * The default behaviour of the `OperatorBase` is `MapOperator`. Therefore, this class is
 * a placeholder.
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
 * 		tx.map((num) => num * 2),
 * 		tx.map((num) => num * 3)
 * 	)
 * .subscribe(observer);
 * observable.emit(10);
 * ```
 *
 * @class
 * @noInheritDoc
 */
export class MapOperator extends OperatorBase {}
