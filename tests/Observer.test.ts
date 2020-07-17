import * as TRex from '../src/index';

test('An observer must recieve an emitted value from the observable.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		result.push(num);
	});
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([10]);
});

test('An observer can be added only once to an observable.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		result.push(num);
	});
	observable.subscribe(observer);

	// Intentionally add two more of the same observer
	observable.subscribe(observer);
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([10]);
});

test('Observer pipe can operate on recieved values.', () => {
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer(
		TRex.pipe(
			(num: number) => num * 4,
			TRex.tap((num) => result.push(num)),
			TRex.tap((num) => result.push(num * 2))
		)
	);
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([40, 80]);
});

test('Multiple observers recieve values.', () => {
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
	expect(result).toStrictEqual([10, 20]);
});

test('Multiple observers use pipe to operate on recieved values.', () => {
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
	expect(result).toStrictEqual([10, 20, 30, 40]);
});
