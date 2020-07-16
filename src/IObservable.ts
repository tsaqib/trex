import { IObserver } from './Observer';
import { LinkedList } from './CommonHelpers';

export interface IObservable {
	subscribe(observer: IObserver): void;
	emit(item: any): void;
	pipeHead?: LinkedList<IObservable>;
	pipe(...observables: IObservable[]): IObservable;
	multicast(...observers: IObserver[]): void;
	destroy?(): void;
}
