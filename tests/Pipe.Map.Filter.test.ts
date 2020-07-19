import * as tx from '../src/index';

test('Disallow empty pip calls on observable.', () => {
	const observer = new tx.Observer(console.log);
	const observable = new tx.Observable();
	const t = () => {
		observable.pipe().subscribe(observer);
		observable.emit(10);
	};
	expect(t).toThrow(Error);
});

test('Pipe and map operators applied to observable can modify values.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => {
		result.push(num / 15);
	});
	observable
		.pipe(
			tx.map((num: number) => num * 2),
			tx.map((num: number) => num * 3)
		)
		.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([4]);
});

test('Pipe, map and filter operators applied to observable can filter values.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => {
		result.push(num / 2);
	});
	observable
		.pipe(
			tx.map((num) => num * 2),
			tx.map((num) => num * 3),
			tx.filter((num) => num > 100)
		)
		.subscribe(observer);
	observable.emit(10);
	observable.emit(20);
	observable.emit(30);
	expect(result).toStrictEqual([60, 90]);
});

test('Throws error for nested observable pipes.', () => {
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => {
		expect(num).toBe(120);
	});

	const t = () => {
		observable
			.pipe(tx.map((num) => num * 2).pipe(tx.filter((num) => num > 100)))
			.subscribe(observer);
		observable.emit(10);
		observable.emit(20);
	};
	expect(t).toThrow(Error);
});
