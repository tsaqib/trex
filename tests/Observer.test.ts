import * as tx from '../src/index';

test('An observer must recieve an emitted value from the observable.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => {
		result.push(num);
	});
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([10]);
});

test('Disallow observers without next function.', () => {
	const observer = new tx.Observer(console.log);
	delete observer.next;
	const observable = new tx.Observable();
	const t = () => {
		observable.subscribe(observer);
		observable.emit(10);
	};
	expect(t).toThrow(Error);
});

test('An observer with error handler gets triggered on error.', () => {
	const result: number[] = [100];
	const observable = new tx.Observable();
	const observer = new tx.Observer(
		(num) => {
			throw new Error('Trigger the error handler');
		},
		(err) => {
			// error reported, so remove the item
			result.splice(0, 1);
		}
	);
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([]);
});

test('An observer can be added only once to an observable.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => {
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
	const observable = new tx.Observable();
	const observer = new tx.Observer((num: number) => result.push(num * 4));
	observable.subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([40]);
});

test('Multiple observers recieve values.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer1 = new tx.Observer((num) => result.push(num));
	const observer2 = new tx.Observer((num) => result.push(num * 2));
	observable.subscribe(observer1);
	observable.subscribe(observer2);
	observable.emit(10);
	expect(result).toStrictEqual([10, 20]);
});
