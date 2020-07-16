import { IObserver } from './Observer';
import { IObservable } from './IObservable';
import { LinkedList } from './CommonHelpers';

type ObserverObservable = {
	observer: IObserver;
	observable: IObservable;
	chainHead?: LinkedList<IObservable>;
};

export class ObservableContext {
	private constructor() {}
	private static maps: ObserverObservable[] = [];

	public static addMap(
		observer: IObserver,
		observable: IObservable,
		chainHead?: LinkedList<IObservable>
	): void {
		this.maps.push({ observer, observable, chainHead });
	}

	public static all() {}

	public static getMap(observer: IObserver, observable: IObservable): ObserverObservable | undefined {
		return this.maps.find(m => m.observer === observer && m.observable === observable);
	}

	public static deleteMap(observer: IObserver): void {}
}
