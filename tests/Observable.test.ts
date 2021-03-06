import * as tx from '../src/index';
import { TxContext } from '../src/TxContext';

test('Observable can emit multiple values in an array.', () => {
	const expected = [1, 2, 3, 4, 5];
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => result.push(num));
	observable.pipe(tx.take(5)).subscribe(observer);
	observable.emit(expected.concat([6, 7, 8, 9, 10]));
	expect(result).toStrictEqual(expected);
});

test('Unsubscribe cleans up for observable.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => result.push(num));
	observable.subscribe(observer);
	observable.emit(10);
	observable.unsubscribe(observer);
	observable.emit(20);
	expect(result).toStrictEqual([10]);
});

test('Unsubscribe cleans up for observable pipe.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => result.push(num / 15));
	observable
		.pipe(
			tx.map((num: number) => num * 2),
			tx.map((num: number) => num * 3)
		)
		.subscribe(observer);
	observable.emit(10);
	expect(observable.observers.length).toBe(1);
	observable.unsubscribe(observer);
	expect(observable.observers.length).toBe(0);
	observable.emit(20);
	expect(result).toStrictEqual([4]);
});

test('Unsubscribe cleans up for multiple observers.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer1 = new tx.Observer((num) => result.push(num));
	const observer2 = new tx.Observer((num) => result.push(num * 2));
	observable.subscribe(observer1);
	observable.subscribe(observer2);
	observable.emit(10);
	expect(observable.observers.length).toBe(2);
	observable.unsubscribe(observer2);
	expect(observable.observers.length).toBe(1);
	observable.emit(10);
	expect(result).toStrictEqual([10, 20, 10]);
});

test('Unsubscribe cleans up for multicast to multiple observers using pipe, maps and filter.', () => {
	const result: number[] = [];
	TxContext.maps = []; // Do this only for unit tests
	const observable = new tx.Observable();
	const observer1 = new tx.Observer((num) => result.push(num));
	const observer2 = new tx.Observer((num) => result.push(num / 5));
	observable
		.pipe(
			tx.map((num) => num * 2),
			tx.map((num) => num * 3),
			tx.filter((num) => num > 500)
		)
		.multicast(observer1, observer2);
	observable.emit(10);
	observable.emit(100);
	expect(TxContext.maps.length).toBe(2);
	observable.unsubscribe(observer1);
	expect(TxContext.maps.length).toBe(1);
	observable.emit(10);
	observable.emit(100);
	expect(result).toStrictEqual([600, 120, 120]);
});

test('Destroy properly cleans up the internal LinkedList.', () => {
	TxContext.maps = []; // Do this only for unit tests
	const observable = new tx.Observable();
	const observer1 = new tx.Observer(console.log);
	const observer2 = new tx.Observer(console.log);
	observable
		.pipe(
			tx.take(5),
			tx.map((num: number) => num * 2),
			tx.tap(console.log),
			tx.filter((num: number) => num > 5),
			tx.pluck('test')
		)
		.multicast(observer1, observer2);
	var x = TxContext.maps;
	expect(TxContext.maps.length).toBe(2);
	observable.destroy();
	expect(TxContext.maps.length).toBe(0);
});
