## Reactive Extension in TypeScript (TRex)

The computations that each of ours activities cause for free applications such as Facebook and Google are incredibly expensive. Even if you had billions of dollars, an optimized and profitable solution squeezing out of those dollars is still very much non-trivial. Such immense scale applications we use everyday are built on top of the reactive programming paradigm to help them process data only when needed. Only responding to a relevant query, results in massive cost savings. Thus, allowing internet-scale applications serve us instantly without charging us \$.

This package helps you do functional reactive programming both on server-side and front-end apps. It helps you define and destroy data streams easily which works as an event bus. You can subscribe
and unsubscribe to the streams. You can perform map, filter and pass on your own functions both at the observables and observers-level.

Note: Angular, Vue, React, etc. frameworks are also built on top of reactive programming principle.

## Installation

`npm i -S @tsaqib/trex`

## Examples:

```typescript
import * as TRex from '@tsaqib/trex';
// In JavaScript: const TRex = require("@tsaqib/trex");

const messageObservable = new TRex.Observable();
const workflowWorker = new TRex.Observer((message) => {
  // TODO: start a workflow
});
const coworkersNotifier = new TRex.Observer(
	TRex.pipe(
		TRex.tap((message: Message) => app.notify(message)),
		(message: Message) => emailer.send(message)
	);
);
const channelUpdater = new TRex.Observer((message) => {
  // TODO: update #office channel
}
const analyticsTracker = new TRex.Observer((message) => {
  // TODO: track analytics
});

messageObservable
	.pipe(
		TRex.map((message: string) => parseJSON(message)),
		TRex.map((json: any) => validateMessage(json)),
		TRex.filter((message: Message) => message.urgent)
	)
  .multicast(workflowWorker,
    coworkersNotifier,
    analyticsTracker,
    channelUpdater);

messageObservable.emit(`{ message: "I'm sick.", to: "Office", urgent: true }`);
```

## Tests

`npm run test:watch`

## Build documentation

`npm run build:docs`

## API documentation

- [@tsaqib/trex](#tsaqibtrex)
- [Classes](#classes)
  - [Class: FilterOperator](#class-filteroperator)
    - [Hierarchy](#hierarchy)
    - [Implements](#implements)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: MapOperator](#class-mapoperator)
    - [Hierarchy](#hierarchy-1)
    - [Implements](#implements-1)
    - [Index](#index-1)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
    - [Methods](#methods-1)
  - [Class: Observable](#class-observable)
    - [Hierarchy](#hierarchy-2)
    - [Implements](#implements-2)
    - [Index](#index-2)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: ObservableBase](#class-observablebase)
    - [Hierarchy](#hierarchy-3)
    - [Implements](#implements-3)
    - [Index](#index-3)
    - [Constructors](#constructors-3)
    - [Properties](#properties-3)
    - [Methods](#methods-3)
  - [Class: Observer](#class-observer)
    - [Hierarchy](#hierarchy-4)
    - [Implements](#implements-4)
    - [Index](#index-4)
    - [Constructors](#constructors-4)
    - [Properties](#properties-4)
  - [Class: ObserverMaps](#class-observermaps)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-5)
    - [Constructors](#constructors-5)
    - [Properties](#properties-5)
    - [Methods](#methods-4)
  - [Class: OperatorBase](#class-operatorbase)
    - [Hierarchy](#hierarchy-6)
    - [Implements](#implements-5)
    - [Index](#index-6)
    - [Constructors](#constructors-6)
    - [Properties](#properties-6)
    - [Methods](#methods-5)
- [@tsaqib/trex](#tsaqibtrex-1)
  - [Index](#index-7)
    - [Classes](#classes-1)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Type aliases](#type-aliases-1)
    - [LinkedList](#linkedlist)
    - [ObserverMap](#observermap)
  - [Functions](#functions-1)
    - [`Const` filter](#const-filter)
    - [`Const` map](#const-map)
    - [`Const` pipe](#const-pipe)
    - [`Const` tap](#const-tap)
- [Interfaces](#interfaces-1)
  - [Interface: IObservable](#interface-iobservable)
    - [Hierarchy](#hierarchy-7)
    - [Implemented by](#implemented-by)
    - [Index](#index-8)
    - [Properties](#properties-7)
    - [Methods](#methods-6)
  - [Interface: IObserver](#interface-iobserver)
    - [Hierarchy](#hierarchy-8)
    - [Implemented by](#implemented-by-1)
    - [Index](#index-9)
    - [Properties](#properties-8)
    - [Methods](#methods-7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

[@tsaqib/trex](#globalsmd)

# @tsaqib/trex

# Classes

<a name="classesfilteroperatormd"></a>

[@tsaqib/trex](#globalsmd) › [FilterOperator](#classesfilteroperatormd)

## Class: FilterOperator

This operator runs the data items through the predicate you pass on to it and if it satisfies
the predicate, it returns back the item. As a result, the subscribers get the item on emit.

### Hierarchy

↳ [OperatorBase](#classesoperatorbasemd)

↳ **FilterOperator**

### Implements

- [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [fn](#fn)
- [observable](#observable)
- [pipeHead](#optional-pipehead)

#### Methods

- [destroy](#destroy)
- [emit](#emit)
- [multicast](#multicast)
- [pipe](#pipe)
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### Constructors

#### constructor

\+ **new FilterOperator**(`fn`: function): _[FilterOperator](#classesfilteroperatormd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[constructor](#constructor)_

_Overrides [ObservableBase](#classesobservablebasemd).[constructor](#constructor)_

_Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L27)_

**Parameters:**

▪ **fn**: _function_

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[FilterOperator](#classesfilteroperatormd)_

### Properties

#### fn

• **fn**: _function_

_Inherited from [OperatorBase](#classesoperatorbasemd).[fn](#fn)_

_Defined in [operators/OperatorBase.ts:25](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L25)_

##### Type declaration:

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

---

#### observable

• **observable**: _[IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[observable](#observable)_

_Defined in [operators/OperatorBase.ts:26](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L26)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipeHead](#optional-pipehead)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

_Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L27)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:117](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L117)_

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
}).subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [OperatorBase](#classesoperatorbasemd).[emit](#emit)_

_Defined in [operators/FilterOperator.ts:25](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/FilterOperator.ts#L25)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _void_

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[multicast](#multicast)_

_Defined in [ObservableBase.ts:104](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L104)_

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name           | Type                                  | Description                      |
| -------------- | ------------------------------------- | -------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** _void_

void

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _never_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipe](#pipe)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

_Defined in [operators/OperatorBase.ts:46](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L46)_

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description                                   |
| ---------------- | ----------------------------------------- | --------------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** _never_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[subscribe](#subscribe)_

_Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

_Defined in [operators/OperatorBase.ts:36](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L36)_

Subscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L41)_

Unsubscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
observable.unsubscribe(observer);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="classesmapoperatormd"></a>

[@tsaqib/trex](#globalsmd) › [MapOperator](#classesmapoperatormd)

## Class: MapOperator

The default behaviour of the `OperatorBase` is `MapOperator`. Therefore, this class is just a
placeholder.

Basic usage example:

```ts
const observer = new TRex.Observer((num) => {
	console.log(num / 2);
});
observable
	.pipe(
		TRex.map((num) => num * 2),
		TRex.map((num) => num * 3),
		TRex.filter((num) => num > 50)
	)
	.subscribe(observer);
observable.emit(10);
```

### Hierarchy

↳ [OperatorBase](#classesoperatorbasemd)

↳ **MapOperator**

### Implements

- [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [fn](#fn)
- [observable](#observable)
- [pipeHead](#optional-pipehead)

#### Methods

- [destroy](#destroy)
- [emit](#emit)
- [multicast](#multicast)
- [pipe](#pipe)
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### Constructors

#### constructor

\+ **new MapOperator**(`fn`: function): _[MapOperator](#classesmapoperatormd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[constructor](#constructor)_

_Overrides [ObservableBase](#classesobservablebasemd).[constructor](#constructor)_

_Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L27)_

**Parameters:**

▪ **fn**: _function_

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[MapOperator](#classesmapoperatormd)_

### Properties

#### fn

• **fn**: _function_

_Inherited from [OperatorBase](#classesoperatorbasemd).[fn](#fn)_

_Defined in [operators/OperatorBase.ts:25](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L25)_

##### Type declaration:

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

---

#### observable

• **observable**: _[IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[observable](#observable)_

_Defined in [operators/OperatorBase.ts:26](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L26)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipeHead](#optional-pipehead)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

_Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L27)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:117](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L117)_

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
}).subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[emit](#emit)_

_Overrides [ObservableBase](#classesobservablebasemd).[emit](#emit)_

_Defined in [operators/OperatorBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L41)_

Emits an item to the stream

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `item` | any  | The item to stream |

**Returns:** _void_

void

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[multicast](#multicast)_

_Defined in [ObservableBase.ts:104](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L104)_

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name           | Type                                  | Description                      |
| -------------- | ------------------------------------- | -------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** _void_

void

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _never_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipe](#pipe)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

_Defined in [operators/OperatorBase.ts:46](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L46)_

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description                                   |
| ---------------- | ----------------------------------------- | --------------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** _never_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[subscribe](#subscribe)_

_Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

_Defined in [operators/OperatorBase.ts:36](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L36)_

Subscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L41)_

Unsubscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
observable.unsubscribe(observer);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="classesobservablemd"></a>

[@tsaqib/trex](#globalsmd) › [Observable](#classesobservablemd)

## Class: Observable

The first class you must instantiate is the `Observable`. An `Observable` listens to the
streams of data and passes on to its observers. You use the `subscribe` function to subscribe
and `emit` function to add a new data to the stream.

`Observer` is essentially a placeholder for `ObservableBase`. Most of the logic is inside the
latter.

Basic usage example:

```ts
const observable = new Observable();
```

### Hierarchy

- [ObservableBase](#classesobservablebasemd)

  ↳ **Observable**

### Implements

- [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [pipeHead](#optional-pipehead)

#### Methods

- [destroy](#destroy)
- [emit](#emit)
- [multicast](#multicast)
- [pipe](#pipe)
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### Constructors

#### constructor

\+ **new Observable**(): _[Observable](#classesobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[constructor](#constructor)_

_Defined in [ObservableBase.ts:19](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L19)_

Constructs an `ObservableBase`.

\*\* Warning: You should use this only by subclassing.

**Returns:** _[Observable](#classesobservablemd)_

### Properties

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Inherited from [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

_Defined in [ObservableBase.ts:19](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L19)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:117](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L117)_

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
}).subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[emit](#emit)_

_Defined in [ObservableBase.ts:64](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L64)_

Emits an item to the stream

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `item` | any  | The item to stream |

**Returns:** _void_

void

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[multicast](#multicast)_

_Defined in [ObservableBase.ts:104](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L104)_

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name           | Type                                  | Description                      |
| -------------- | ------------------------------------- | -------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** _void_

void

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _[IObservable](#interfacesiobservablemd)_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

_Defined in [ObservableBase.ts:81](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L81)_

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description                                   |
| ---------------- | ----------------------------------------- | --------------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** _[IObservable](#interfacesiobservablemd)_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

_Defined in [ObservableBase.ts:34](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L34)_

Subscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L41)_

Unsubscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
observable.unsubscribe(observer);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="classesobservablebasemd"></a>

[@tsaqib/trex](#globalsmd) › [ObservableBase](#classesobservablebasemd)

## Class: ObservableBase

The `ObservableBase` class, implements `IObservable`, but is not for public instantiation.
The first class you must instantiate is the `Observable` which is a placeholder for
`ObservableBase`.

\*\* Warning: You should only subclass this class.

**`implements`** {IObservable}

### Hierarchy

- **ObservableBase**

  ↳ [Observable](#classesobservablemd)

  ↳ [OperatorBase](#classesoperatorbasemd)

### Implements

- [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [observers](#private-observers)
- [pipeHead](#optional-pipehead)

#### Methods

- [destroy](#destroy)
- [emit](#emit)
- [multicast](#multicast)
- [pipe](#pipe)
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### Constructors

#### constructor

\+ **new ObservableBase**(): _[ObservableBase](#classesobservablebasemd)_

_Defined in [ObservableBase.ts:19](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L19)_

Constructs an `ObservableBase`.

\*\* Warning: You should use this only by subclassing.

**Returns:** _[ObservableBase](#classesobservablebasemd)_

### Properties

#### `Private` observers

• **observers**: _[IObserver](#interfacesiobservermd)[]_

_Defined in [ObservableBase.ts:18](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L18)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Defined in [ObservableBase.ts:19](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L19)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:117](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L117)_

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
}).subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:64](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L64)_

Emits an item to the stream

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `item` | any  | The item to stream |

**Returns:** _void_

void

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:104](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L104)_

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name           | Type                                  | Description                      |
| -------------- | ------------------------------------- | -------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** _void_

void

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _[IObservable](#interfacesiobservablemd)_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:81](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L81)_

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description                                   |
| ---------------- | ----------------------------------------- | --------------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** _[IObservable](#interfacesiobservablemd)_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:34](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L34)_

Subscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L41)_

Unsubscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
observable.unsubscribe(observer);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="classesobservermd"></a>

[@tsaqib/trex](#globalsmd) › [Observer](#classesobservermd)

## Class: Observer

The `Observer` gives you the basis for an observer. A function or pipe can be passed onto
the constructor or you can subclass the class itself to make your own observer.

**`implements`** {IObservable}

### Hierarchy

- **Observer**

### Implements

- [IObserver](#interfacesiobservermd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [error](#optional-error)
- [next](#next)

### Constructors

#### constructor

\+ **new Observer**(`next`: function, `error?`: undefined | function): _[Observer](#classesobservermd)_

_Defined in [Observer.ts:12](https://github.com/tsaqib/trex/blob/eef8e75/src/Observer.ts#L12)_

Constructs an `Observer`.

Basic usage example:

```ts
	const observer = new Observer(
		(item: string) => console.log(item),
		(err: any) => console.error(err);
	)
```

**Parameters:**

▪ **next**: _function_

The function t invoke on data arrival

▸ (`item`: any): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

▪`Optional` **error**: _undefined | function_

The error handler function

**Returns:** _[Observer](#classesobservermd)_

### Properties

#### `Optional` error

• **error**? : _undefined | function_

_Implementation of [IObserver](#interfacesiobservermd).[error](#optional-error)_

_Defined in [Observer.ts:12](https://github.com/tsaqib/trex/blob/eef8e75/src/Observer.ts#L12)_

---

#### next

• **next**: _function_

_Implementation of [IObserver](#interfacesiobservermd).[next](#next)_

_Defined in [Observer.ts:11](https://github.com/tsaqib/trex/blob/eef8e75/src/Observer.ts#L11)_

##### Type declaration:

▸ (`item`: any): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

<a name="classesobservermapsmd"></a>

[@tsaqib/trex](#globalsmd) › [ObserverMaps](#classesobservermapsmd)

## Class: ObserverMaps

This is an internal class and not meant for public use. This class maintains a list of
linked list of observable-observer internal call chains.

\*\* Warning: You should never use this class.

### Hierarchy

- **ObserverMaps**

### Index

#### Constructors

- [constructor](#private-constructor)

#### Properties

- [maps](#static-maps)

#### Methods

- [add](#static-add)
- [get](#static-get)
- [print](#static-print)
- [remove](#static-remove)

### Constructors

#### `Private` constructor

\+ **new ObserverMaps**(): _[ObserverMaps](#classesobservermapsmd)_

_Defined in [ObvserverMaps.ts:19](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L19)_

**Returns:** _[ObserverMaps](#classesobservermapsmd)_

### Properties

#### `Static` maps

▪ **maps**: _[ObserverMap](#observermap)[]_ = []

_Defined in [ObvserverMaps.ts:21](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L21)_

### Methods

#### `Static` add

▸ **add**(`observer`: [IObserver](#interfacesiobservermd), `observable`: [IObservable](#interfacesiobservablemd), `chainHead?`: [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›): _void_

_Defined in [ObvserverMaps.ts:44](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L44)_

Adds a tuple of observer, observable and the head of the call's linked list.

**`memberof`** ObserverMaps

**`static`**

**Parameters:**

| Name         | Type                                                               | Description    |
| ------------ | ------------------------------------------------------------------ | -------------- |
| `observer`   | [IObserver](#interfacesiobservermd)                                | The observable |
| `observable` | [IObservable](#interfacesiobservablemd)                            | -              |
| `chainHead?` | [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)› | -              |

**Returns:** _void_

void

---

#### `Static` get

▸ **get**(`observer`: [IObserver](#interfacesiobservermd)): _[ObserverMap](#observermap)[] | undefined_

_Defined in [ObvserverMaps.ts:61](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L61)_

Gets a tuple list of observer, observable and the head of the call's linked list for a given
`IObserver`

**`memberof`** ObserverMaps

**`static`**

**Parameters:**

| Name       | Type                                | Description            |
| ---------- | ----------------------------------- | ---------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The observer to lookup |

**Returns:** _[ObserverMap](#observermap)[] | undefined_

ObserverMap[] | undefined

---

#### `Static` print

▸ **print**(): _void_

_Defined in [ObvserverMaps.ts:30](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L30)_

Prints the current ObserverMaps for debugging purposes.

**`memberof`** ObserverMaps

**`static`**

**Returns:** _void_

void

---

#### `Static` remove

▸ **remove**(`map`: [ObserverMap](#observermap)): _void_

_Defined in [ObvserverMaps.ts:73](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L73)_

Removes a tuple for a given `ObserverMap` instance

**`memberof`** ObserverMaps

**`static`**

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| `map` | [ObserverMap](#observermap) |

**Returns:** _void_

void

<a name="classesoperatorbasemd"></a>

[@tsaqib/trex](#globalsmd) › [OperatorBase](#classesoperatorbasemd)

## Class: OperatorBase

This class provides you the basis for your own operators and operators that are included in
this package already. Operators inherit from `ObservableBase`, so they have same methods and
properties.

Basic usage example:

```ts
class Squarer : OperatorBase {
	emit (item: number) {
		this.observable.emit(item * item);
	}
}
```

### Hierarchy

- [ObservableBase](#classesobservablebasemd)

  ↳ **OperatorBase**

  ↳ [MapOperator](#classesmapoperatormd)

  ↳ [FilterOperator](#classesfilteroperatormd)

### Implements

- [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [fn](#fn)
- [observable](#observable)
- [pipeHead](#optional-pipehead)

#### Methods

- [destroy](#destroy)
- [emit](#emit)
- [multicast](#multicast)
- [pipe](#pipe)
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### Constructors

#### constructor

\+ **new OperatorBase**(`fn`: function): _[OperatorBase](#classesoperatorbasemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[constructor](#constructor)_

_Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L27)_

**Parameters:**

▪ **fn**: _function_

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[OperatorBase](#classesoperatorbasemd)_

### Properties

#### fn

• **fn**: _function_

_Defined in [operators/OperatorBase.ts:25](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L25)_

##### Type declaration:

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

---

#### observable

• **observable**: _[IObservable](#interfacesiobservablemd)_

_Defined in [operators/OperatorBase.ts:26](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L26)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

_Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L27)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:117](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L117)_

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
}).subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[emit](#emit)_

_Defined in [operators/OperatorBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L41)_

Emits an item to the stream

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `item` | any  | The item to stream |

**Returns:** _void_

void

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[multicast](#multicast)_

_Defined in [ObservableBase.ts:104](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L104)_

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name           | Type                                  | Description                      |
| -------------- | ------------------------------------- | -------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** _void_

void

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _never_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

_Defined in [operators/OperatorBase.ts:46](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L46)_

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description                                   |
| ---------------- | ----------------------------------------- | --------------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** _never_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

_Defined in [operators/OperatorBase.ts:36](https://github.com/tsaqib/trex/blob/eef8e75/src/operators/OperatorBase.ts#L36)_

Subscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:41](https://github.com/tsaqib/trex/blob/eef8e75/src/ObservableBase.ts#L41)_

Unsubscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
observable.unsubscribe(observer);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="globalsmd"></a>

[@tsaqib/trex](#globalsmd)

# @tsaqib/trex

## Index

### Classes

- [FilterOperator](#classesfilteroperatormd)
- [MapOperator](#classesmapoperatormd)
- [Observable](#classesobservablemd)
- [ObservableBase](#classesobservablebasemd)
- [Observer](#classesobservermd)
- [ObserverMaps](#classesobservermapsmd)
- [OperatorBase](#classesoperatorbasemd)

### Interfaces

- [IObservable](#interfacesiobservablemd)
- [IObserver](#interfacesiobservermd)

### Type aliases

- [LinkedList](#linkedlist)
- [ObserverMap](#observermap)

### Functions

- [filter](#const-filter)
- [map](#const-map)
- [pipe](#const-pipe)
- [tap](#const-tap)

## Type aliases

### LinkedList

Ƭ **LinkedList**: _object_

_Defined in [CommonHelpers.ts:7](https://github.com/tsaqib/trex/blob/eef8e75/src/CommonHelpers.ts#L7)_

#### Type declaration:

- **next**? : _[LinkedList](#linkedlist)‹T›_

- **value**: _T_

---

### ObserverMap

Ƭ **ObserverMap**: _object_

_Defined in [ObvserverMaps.ts:5](https://github.com/tsaqib/trex/blob/eef8e75/src/ObvserverMaps.ts#L5)_

#### Type declaration:

- **chainHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

- **observable**: _[IObservable](#interfacesiobservablemd)_

- **observer**: _[IObserver](#interfacesiobservermd)_

## Functions

### `Const` filter

▸ **filter**(`fn`: function): _[FilterOperator](#classesfilteroperatormd)‹›_

_Defined in [CommonHelpers.ts:88](https://github.com/tsaqib/trex/blob/eef8e75/src/CommonHelpers.ts#L88)_

Returns an item only when the specified predicate is true.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
	pipe(
		filter((num) => num < 15),
		(num) => console.log(num * 4)
	)
);
observable.subscribe(observer);
observable.emit(10);
observable.emit(20);
```

Output:
40

**Parameters:**

▪ **fn**: _function_

The predcate to check with the item

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[FilterOperator](#classesfilteroperatormd)‹›_

---

### `Const` map

▸ **map**(`fn`: function): _[MapOperator](#classesmapoperatormd)‹›_

_Defined in [CommonHelpers.ts:62](https://github.com/tsaqib/trex/blob/eef8e75/src/CommonHelpers.ts#L62)_

Executes standard 1:1 map function on an incoming item and returns the computed item back.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
	pipe(
		map((num) => num * 3),
		(num) => console.log(num * 4)
	)
);
observable.subscribe(observer);
observable.emit(10);
```

Output:
120

**Parameters:**

▪ **fn**: _function_

The function to apply on the item

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[MapOperator](#classesmapoperatormd)‹›_

---

### `Const` pipe

▸ **pipe**(...`fns`: Function[]): _(Anonymous function)_

_Defined in [CommonHelpers.ts:115](https://github.com/tsaqib/trex/blob/eef8e75/src/CommonHelpers.ts#L115)_

Pipes multiple observer operations together.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
	pipe(
		filter((num) => num < 15),
		(num) => console.log(num * 4)
	)
);
observable.subscribe(observer);
observable.emit(10);
observable.emit(20);
```

Output:
40

**Parameters:**

| Name     | Type       | Description                            |
| -------- | ---------- | -------------------------------------- |
| `...fns` | Function[] | The list of actions to form a chain of |

**Returns:** _(Anonymous function)_

---

### `Const` tap

▸ **tap**(`fn`: function): _(Anonymous function)_

_Defined in [CommonHelpers.ts:34](https://github.com/tsaqib/trex/blob/eef8e75/src/CommonHelpers.ts#L34)_

Execute the specified function on an incoming item and also returns the same item back.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
	pipe(
		tap((num) => console.log(num * 3)),
		tap((num) => console.log(num * 4))
	)
);
observable.subscribe(observer);
observable.emit(10);
```

Output:
30
40

**Parameters:**

▪ **fn**: _function_

The function to apply on the item

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _(Anonymous function)_

# Interfaces

<a name="interfacesiobservablemd"></a>

[@tsaqib/trex](#globalsmd) › [IObservable](#interfacesiobservablemd)

## Interface: IObservable

The interface behind the `ObservableBase`, maintains the contract for all observables.

**`interface`**

### Hierarchy

- **IObservable**

### Implemented by

- [FilterOperator](#classesfilteroperatormd)
- [MapOperator](#classesmapoperatormd)
- [Observable](#classesobservablemd)
- [ObservableBase](#classesobservablebasemd)
- [OperatorBase](#classesoperatorbasemd)

### Index

#### Properties

- [pipeHead](#optional-pipehead)

#### Methods

- [destroy](#optional-destroy)
- [emit](#emit)
- [multicast](#multicast)
- [pipe](#pipe)
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### Properties

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Defined in [IObservable.ts:77](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L77)_

\*\* Warning: Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.

**`memberof`** IObservable

### Methods

#### `Optional` destroy

▸ **destroy**(): _void_

_Defined in [IObservable.ts:143](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L143)_

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
}).subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Defined in [IObservable.ts:69](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L69)_

Emits an item to the stream

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name   | Type | Description        |
| ------ | ---- | ------------------ |
| `item` | any  | The item to stream |

**Returns:** _void_

void

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Defined in [IObservable.ts:123](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L123)_

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name           | Type                                  | Description                      |
| -------------- | ------------------------------------- | -------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** _void_

void

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _[IObservable](#interfacesiobservablemd)_

_Defined in [IObservable.ts:99](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L99)_

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map((x) => x * 2),
		filter((x) => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description                                   |
| ---------------- | ----------------------------------------- | --------------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** _[IObservable](#interfacesiobservablemd)_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Defined in [IObservable.ts:28](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L28)_

Subscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Defined in [IObservable.ts:49](https://github.com/tsaqib/trex/blob/eef8e75/src/IObservable.ts#L49)_

Unsubscribes an `Observer` instance

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
});
observable.subscribe(observer);
observable.emit(10);
observable.unsubscribe(observer);
```

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="interfacesiobservermd"></a>

[@tsaqib/trex](#globalsmd) › [IObserver](#interfacesiobservermd)

## Interface: IObserver

The interface behind the `Observer`, maintains the contract for all observers.

**`interface`**

### Hierarchy

- **IObserver**

### Implemented by

- [Observer](#classesobservermd)

### Index

#### Properties

- [next](#next)

#### Methods

- [error](#optional-error)

### Properties

#### next

• **next**: _function_

_Defined in [IObserver.ts:14](https://github.com/tsaqib/trex/blob/eef8e75/src/IObserver.ts#L14)_

Whenever a new item is available in the stream, the `next` function is called with that.

**`param`** The item newly arrived in the stream.

**`returns`** void

**`memberof`** IObserver

##### Type declaration:

▸ (`item`: any): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

### Methods

#### `Optional` error

▸ **error**(`err`: any): _void_

_Defined in [IObserver.ts:23](https://github.com/tsaqib/trex/blob/eef8e75/src/IObserver.ts#L23)_

The error handler for the potential exception occured inside the `next` function.

**`memberof`** IObserver

**Parameters:**

| Name  | Type | Description       |
| ----- | ---- | ----------------- |
| `err` | any  | The error object. |

**Returns:** _void_

void
