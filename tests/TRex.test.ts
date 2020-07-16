import * as TRex from '../src/index';

test('An observer must recieve an emitted value from the observable.', () => {
	const observable = new TRex.Observable<number>();
	const observer = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	observable.subscribe(observer);
	observable.emit(10);
});

test('Pipe and map operators applied to observable can modify values.', () => {
	const observable = new TRex.Observable<number>();
	const observer = new TRex.Observer((num) => {
		expect(num).toBe(60);
	});
	observable
		.pipe(
			TRex.map((num: number) => num * 2),
			TRex.map((num: number) => num * 3)
		)
		.subscribe(observer);
	observable.emit(10);
});

test('Pipe, map and filter operators applied to observable can filter values.', () => {
	const observable = new TRex.Observable<number>();
	const observer = new TRex.Observer((num) => {
		expect(num).toBe(120);
	});
	observable
		.pipe(
			TRex.map((num: number) => num * 2),
			TRex.map((num: number) => num * 3),
			TRex.filter((num: number) => num > 100)
		)
		.subscribe(observer);
	observable.emit(10);
	observable.emit(20);
});

test('Observer pipe can operate on recieved values.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable<number>();
	const observer = new TRex.Observer<number>(
		TRex.pipe(
			TRex.tap((num: number) => result.push(num)),
			TRex.tap((num: number) => result.push(num * 2))
		)
	);
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([10, 20]);
});
