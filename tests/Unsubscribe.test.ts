import * as TRex from '../src/index';

test('Unsubscribe cleans up for observable.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		result.push(num);
	});
	observable.subscribe(observer);
	observable.emit(10);
	observable.unsubscribe(observer);
	observable.emit(20);
	expect(result).toStrictEqual([10]);
});

test('Observer pipe can operate on recieved values.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer(
		TRex.pipe(
			(num: number) => num * 4,
			TRex.tap((num) => result.push(num)),
			TRex.tap((num) => result.push(num * 2))
		)
	);

	const observer2 = new TRex.Observer(
		TRex.pipe(
			(num: number) => num * 2,
			TRex.tap((num) => result.push(num)),
			TRex.tap((num) => result.push(num * 2))
		)
	);

	observable.subscribe(observer1);
	observable.subscribe(observer2);
	observable.emit(10);
	observable.unsubscribe(observer2);
	observable.emit(10);
	expect(result).toStrictEqual([40, 80, 20, 40, 40, 80]);
});

test('Unsubscribe cleans up for observable pipe.', () => {
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
	observable.unsubscribe(observer);
	observable.emit(20);
	expect(result).toStrictEqual([4]);
});

test('Unsubscribe cleans up for multiple observers.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		result.push(num);
	});
	const observer2 = new TRex.Observer((num) => {
		result.push(num * 2);
	});
	observable.subscribe(observer1);
	observable.subscribe(observer2);
	observable.emit(10);
	observable.unsubscribe(observer2);
	observable.emit(10);
	expect(result).toStrictEqual([10, 20, 10]);
});

test('Unsubscribe cleans up for multiple observers use pipe.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer(
		TRex.pipe(
			TRex.tap((num) => result.push(num)),
			TRex.tap((num) => result.push(num * 2))
		)
	);
	observable.subscribe(observer1);
	let observer2 = new TRex.Observer(
		TRex.pipe(
			TRex.tap((num) => result.push(num * 3)),
			TRex.tap((num) => result.push(num * 4))
		)
	);
	observable.subscribe(observer2);
	observable.emit(10);
	observable.unsubscribe(observer2);
	observable.emit(10);
	expect(result).toStrictEqual([10, 20, 30, 40, 10, 20]);
});

test('Unsubscribe cleans up for multicast to multiple observers using pipe, maps and filter.', () => {
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
	observable.unsubscribe(observer1);
	observable.emit(10);
	observable.emit(100);
	expect(result).toStrictEqual([600, 120, 120]);
});
