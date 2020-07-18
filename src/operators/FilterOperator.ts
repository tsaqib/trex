import { OperatorBase } from './OperatorBase';

/**
 * The default behaviour of the `OperatorBase` is `MapOperator`. Therefore, this class is just a
 * placeholder.
 * @class
 * @inheritdoc
 */
export class FilterOperator extends OperatorBase {
	emit(item: any) {
		if (this.fn(item)) {
			this.observable.emit(item);
		}
	}
}
