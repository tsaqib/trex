import * as TRex from '../src/index';
import { ObservableContext } from '../src/ObservableContext';

test('An observer must recieve an emitted value from the observable.', () => {
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	observable.subscribe(observer);
	observable.emit(10);
});

test('Pipe and map operators applied to observable can modify values.', () => {
	const observable = new TRex.Observable();
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
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		expect(num).toBe(120);
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
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	const observer2 = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	observable.subscribe(observer1);
	observable.subscribe(observer2);
	observable.emit(10);
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

test('Multicasts to multiple observers.', () => {
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	const observer2 = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	observable.multicast(observer1, observer2);
	observable.emit(10);
});

test('Multicasts to multiple observers after a pipe.', () => {
	const observable = new TRex.Observable();
	const observer1 = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	const observer2 = new TRex.Observer((num) => {
		expect(num).toBe(10);
	});
	observable
		.pipe(
			TRex.map((num) => num * 2),
			TRex.map((num) => num * 3),
			TRex.filter((num) => num > 100)
		)
		.multicast(observer1, observer2);
	observable.emit(10);
	ObservableContext.all();
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
