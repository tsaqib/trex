import * as TRex from '../src/index';

test('Multicasts to multiple observers.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		result.push(num * 5);
	});
	const observer2 = new TRex.Observer((num) => {
		result.push(num / 5);
	});
	observable.multicast(observer1, observer2);
	observable.emit(10);
	expect(result).toStrictEqual([50, 2]);
});

test('Multicasts to multiple observers after a pipe and map.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		result.push(num);
	});
	const observer2 = new TRex.Observer((num) => {
		result.push(num * 5);
	});
	observable
		.pipe(
			TRex.map((num) => num * 2),
			TRex.map((num) => num * 3)
		)
		.multicast(observer1, observer2);
	observable.emit(10);
	expect(result).toStrictEqual([60, 300]);
});

test('Multicasts to multiple observers after a pipe, map and filter.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		result.push(num);
	});
	const observer2 = new TRex.Observer((num) => {
		result.push(num / 5);
	});
	observable
		.pipe(
			TRex.map((num) => num * 2),
			TRex.map((num) => num * 3),
			TRex.filter((num) => num > 500)
		)
		.multicast(observer1, observer2);
	observable.emit(10);
	observable.emit(100);
	expect(result).toStrictEqual([600, 120]);
});
