import { LinkedList } from './CommonHelpers';
import { IObservable } from './IObservable';
import { IObserver } from './IObserver';

type ObserverMap = {
	observer: IObserver;
	observable: IObservable;
	chainHead?: LinkedList<IObservable>;
};

export class ObserverMaps {
	private constructor() {}
	public static maps: ObserverMap[] = [];

	public static print(): void {
		console.log('Maps', this.maps);
	}

	public static add(
		observer: IObserver,
		observable: IObservable,
		chainHead?: LinkedList<IObservable>
	): void {
		this.maps.push({ observer, observable, chainHead });
	}

	public static get(observer: IObserver): ObserverMap[] | undefined {
		return this.maps.filter((m) => m.observer === observer);
	}

	public static remove(map: ObserverMap): void {
		this.maps.splice(this.maps.indexOf(map), 1);
	}
}
