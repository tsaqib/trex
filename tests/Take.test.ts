import * as TRex from '../src/index';

test('Test Pipe and map operators applied to observable can modify values.', () => {
	const expected = [1, 2, 3, 4, 5];
	const result: number[] = [];
	const observable = new TRex.Observable();
	const observer = new TRex.Observer((num) => {
		result.push(num);
	});
	observable.pipe(TRex.take(5)).subscribe(observer);
	observable.emit(expected.concat([6, 7, 8, 9, 10]));
	expect(result).toStrictEqual(expected);
});
