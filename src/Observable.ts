import { ObservableBase } from './ObservableBase';

/**
 * The first class you must instantiate is the `Observable`. An `Observable` listens to the
 * streams of data and passes on to its observers. You use the `subscribe` function to subscribe
 * and `emit` function to add a new data to the stream.
 *
 * `Observer` is essentially a placeholder for `ObservableBase`. Most of the logic is inside the
 * latter.
 * @class
 */
export class Observable extends ObservableBase {}
