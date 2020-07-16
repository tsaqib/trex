import * as TRex from '../src/index';
import { ObservableContext } from '../src/ObservableContext';

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

// test('Multicasts to multiple observers after a pipe.', () => {
// 	const observable = new TRex.Observable();
// 	const observer1 = new TRex.Observer((num) => {
// 		expect(num).toBe(10);
// 	});
// 	const observer2 = new TRex.Observer((num) => {
// 		expect(num).toBe(10);
// 	});
// 	observable
// 		.pipe(
// 			TRex.map((num) => num * 2),
// 			TRex.map((num) => num * 3),
// 			TRex.filter((num) => num > 100)
// 		)
// 		.multicast(observer1, observer2);
// 	observable.emit(10);
// 	ObservableContext.all();
// });
