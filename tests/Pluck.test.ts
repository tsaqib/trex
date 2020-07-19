import * as tx from '../src/index';

test('Pluck operator only returns the property from each item.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	observable
		.pipe(tx.take(1), tx.pluck('email'))
		.subscribe(new tx.Observer((email) => result.push(email)));
	observable.emit({ name: 'King', email: 'email@kingdom' });
	observable.emit({ name: 'Queen', email: 'email@queendom' });
	expect(result).toStrictEqual(['email@kingdom']);
});

test('Pluck operator disallows empty propName.', () => {
	const result: number[] = [];
	const observable = new tx.Observable();
	const t = () => {
		observable
			.pipe(tx.pluck(''))
			.subscribe(new tx.Observer((email) => result.push(email)));
	};
	expect(t).toThrow(Error);
});
