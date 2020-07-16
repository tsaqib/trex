import { OperatorBase } from './OperatorBase';

export class FilterOperator extends OperatorBase {
	emit(item: any) {
		if (this.fn(item)) {
			this.observable.emit(item);
		}
	}
}
