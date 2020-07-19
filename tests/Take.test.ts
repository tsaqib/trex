import * as tx from '../src/index';

test('Take operator takes only n-values.', () => {
	const expected = [1, 2, 3, 4, 5];
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => {
		result.push(num);
	});
	observable.pipe(tx.take(5)).subscribe(observer);
	observable.emit(expected.concat([6, 7, 8, 9, 10]));
	expect(result).toStrictEqual(expected);
});
