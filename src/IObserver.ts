export interface IObserver {
	next: (item: any) => void;
	error?(err: any): void;
}
