import { IObserver } from './IObserver';

export class Observer implements IObserver {
	next: (item: any) => void;
	error?: (err: any) => void;

	constructor(next: (item: any) => void, error?: any) {
		this.next = next;
		this.error = error;
	}
}
