import * as TRex from '../src/index';

test('Pipe and map operators applied to observable can modify values.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		result.push(num / 15);
	});
	observable
		.pipe(
			TRex.map((num: number) => num * 2),
			TRex.map((num: number) => num * 3)
		)
		.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([4]);
});

test('Pipe, map and filter operators applied to observable can filter values.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		result.push(num / 2);
	});
	observable
		.pipe(
			TRex.map((num) => num * 2),
			TRex.map((num) => num * 3),
			TRex.filter((num) => num > 100)
		)
		.subscribe(observer);
	observable.emit(10);
	observable.emit(20);
	observable.emit(30);
});

test('Throws error for nested observable pipes.', () => {
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		expect(num).toBe(120);
	});

	const t = () => {
		observable
			.pipe(TRex.map((num) => num * 2).pipe(TRex.filter((num) => num > 100)))
			.subscribe(observer);
		observable.emit(10);
		observable.emit(20);
	};
	expect(t).toThrow(Error);
});
