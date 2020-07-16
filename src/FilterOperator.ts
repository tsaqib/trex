import { OperatorBase } from './OperatorBase';

export class FilterOperator<T> extends OperatorBase<T> {
	emit(item: T) {
		if (this.fn(item)) {
			this.observable.emit(item);
		}
	}
}
