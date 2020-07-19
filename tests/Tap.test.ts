import * as tx from '../src/index';

test('Tap operator does not pass forward the modified value.', () => {
	const square = (num: number) => num * num;
	const result: number[] = [];
	const observable = new tx.Observable();
	const observer = new tx.Observer((num) => result.push(num));
	observable.pipe(tx.tap(square)).subscribe(observer);
	observable.emit(10);
	expect(result).toStrictEqual([10]);
});
