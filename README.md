## Reactive Extension in TypeScript (TRex)

The computations that each of ours activities cause for free applications such as Facebook and Google are incredibly expensive. Even if you had billions of dollars, an optimized and profitable solution squeezing out of those dollars is still very much non-trivial. Such immense scale applications we use everyday are built on top of the reactive programming paradigm to help them process data only when needed. Only responding to a relevant query, results in massive cost savings. Thus, allowing internet-scale applications serve us instantly without charging us \$.

This package helps you do functional reactive programming both on server-side and front-end apps. It helps you define and destroy data streams easily which works as an event bus. You can subscribe
and unsubscribe to the streams. You can perform map, filter and pass on your own functions both at the observables and observers-level.

Note: Angular, Vue, React, etc. frameworks are also built on top of reactive programming principle.

[![@tsaqib/trex](https://circleci.com/gh/tsaqib/trex.svg?style=shield)](https://www.npmjs.com/package/@tsaqib/trex)

## Installation

`npm i -S @tsaqib/trex`

## Examples:

[See /tests directory for more examples](https://github.com/tsaqib/trex/tree/master/tests)

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

## API documentations


- [@tsaqib/trex](#tsaqibtrex)
- [Classes](#classes)
  - [Class: FilterOperator](#class-filteroperator)
    - [Hierarchy](#hierarchy)
    - [Implements](#implements)
    - [Index](#index)
    - [Methods](#methods)
  - [Class: MapOperator](#class-mapoperator)
    - [Hierarchy](#hierarchy-1)
    - [Implements](#implements-1)
  - [Class: Observable](#class-observable)
    - [Hierarchy](#hierarchy-2)
    - [Implements](#implements-2)
  - [Class: ObservableBase](#class-observablebase)
    - [Hierarchy](#hierarchy-3)
    - [Implements](#implements-3)
    - [Index](#index-1)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods-1)
  - [Class: Observer](#class-observer)
    - [Hierarchy](#hierarchy-4)
    - [Implements](#implements-4)
    - [Index](#index-2)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
  - [Class: ObserverMaps](#class-observermaps)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-3)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: OperatorBase](#class-operatorbase)
    - [Hierarchy](#hierarchy-6)
    - [Implements](#implements-5)
    - [Index](#index-4)
    - [Constructors](#constructors-3)
    - [Properties](#properties-3)
    - [Methods](#methods-3)
- [@tsaqib/trex](#tsaqibtrex-1)
  - [Index](#index-5)
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
    - [Index](#index-6)
    - [Properties](#properties-4)
    - [Methods](#methods-4)
  - [Interface: IObserver](#interface-iobserver)
    - [Hierarchy](#hierarchy-8)
    - [Implemented by](#implemented-by-1)
    - [Index](#index-7)
    - [Properties](#properties-5)
    - [Methods](#methods-5)

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

  ↳ **FilterOperator**

### Implements

* [IObservable](#interfacesiobservablemd)

### Index

#### Methods

* [emit](#emit)

### Methods

####  emit

▸ **emit**(`item`: any): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [OperatorBase](#classesoperatorbasemd).[emit](#emit)*

*Defined in [operators/FilterOperator.ts:32](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/FilterOperator.ts#L32)*

Applies the specified predicate on the item and returns it when the predicate returns true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any | The item  |

**Returns:** *void*


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

* [IObservable](#interfacesiobservablemd)


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

* [ObservableBase](#classesobservablebasemd)

  ↳ **Observable**

### Implements

* [IObservable](#interfacesiobservablemd)


<a name="classesobservablebasemd"></a>

[@tsaqib/trex](#globalsmd) › [ObservableBase](#classesobservablebasemd)

## Class: ObservableBase

The `ObservableBase` class, implements `IObservable`, but is not for public instantiation.
The first class you must instantiate is the `Observable` which is a placeholder for
`ObservableBase`.

** Warning: You should only subclass this class.

**`inheritdoc`** 

**`implements`** {IObservable}

### Hierarchy

* **ObservableBase**

  ↳ [Observable](#classesobservablemd)

  ↳ [OperatorBase](#classesoperatorbasemd)

### Implements

* [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [observers](#private-observers)
* [pipeHead](#optional-pipehead)

#### Methods

* [destroy](#destroy)
* [emit](#emit)
* [multicast](#multicast)
* [pipe](#pipe)
* [subscribe](#subscribe)
* [unsubscribe](#unsubscribe)

### Constructors

####  constructor

\+ **new ObservableBase**(): *[ObservableBase](#classesobservablebasemd)*

*Defined in [ObservableBase.ts:20](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L20)*

Constructs an `ObservableBase`.

** Warning: You should use this only by subclassing.

**Returns:** *[ObservableBase](#classesobservablebasemd)*

### Properties

#### `Private` observers

• **observers**: *[IObserver](#interfacesiobservermd)[]*

*Defined in [ObservableBase.ts:19](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L19)*

___

#### `Optional` pipeHead

• **pipeHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

*Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)*

*Defined in [ObservableBase.ts:20](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L20)*

### Methods

####  destroy

▸ **destroy**(): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [ObservableBase.ts:112](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L112)*

**Returns:** *void*

___

####  emit

▸ **emit**(`item`: any): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [ObservableBase.ts:62](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *void*

___

####  multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [ObservableBase.ts:100](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** *void*

___

####  pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): *[IObservable](#interfacesiobservablemd)*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [ObservableBase.ts:78](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** *[IObservable](#interfacesiobservablemd)*

___

####  subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [ObservableBase.ts:34](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) |

**Returns:** *void*

___

####  unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [ObservableBase.ts:40](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObservableBase.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) |

**Returns:** *void*


<a name="classesobservermd"></a>

[@tsaqib/trex](#globalsmd) › [Observer](#classesobservermd)

## Class: Observer

The `Observer` gives you the basis for an observer. A function or pipe can be passed onto
the constructor or you can subclass the class itself to make your own observer.

**`inheritdoc`** 

**`implements`** {IObservable}

### Hierarchy

* **Observer**

### Implements

* [IObserver](#interfacesiobservermd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [error](#optional-error)
* [next](#next)

### Constructors

####  constructor

\+ **new Observer**(`next`: function, `error?`: undefined | function): *[Observer](#classesobservermd)*

*Defined in [Observer.ts:13](https://github.com/tsaqib/trex/blob/7f81a5e/src/Observer.ts#L13)*

Constructs an `Observer`.

Basic usage example:

```ts
	const observer = new Observer(
		(item: string) => console.log(item),
		(err: any) => console.error(err);
	)
```

**Parameters:**

▪ **next**: *function*

The function t invoke on data arrival

▸ (`item`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

▪`Optional`  **error**: *undefined | function*

The error handler function

**Returns:** *[Observer](#classesobservermd)*

### Properties

#### `Optional` error

• **error**? : *undefined | function*

*Implementation of [IObserver](#interfacesiobservermd).[error](#optional-error)*

*Defined in [Observer.ts:13](https://github.com/tsaqib/trex/blob/7f81a5e/src/Observer.ts#L13)*

___

####  next

• **next**: *function*

*Implementation of [IObserver](#interfacesiobservermd).[next](#next)*

*Defined in [Observer.ts:12](https://github.com/tsaqib/trex/blob/7f81a5e/src/Observer.ts#L12)*

##### Type declaration:

▸ (`item`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |


<a name="classesobservermapsmd"></a>

[@tsaqib/trex](#globalsmd) › [ObserverMaps](#classesobservermapsmd)

## Class: ObserverMaps

This is an internal class and not meant for public use. This class maintains a list of
linked list of observable-observer internal call chains.

** Warning: You should never use this class.

### Hierarchy

* **ObserverMaps**

### Index

#### Constructors

* [constructor](#private-constructor)

#### Properties

* [maps](#static-maps)

#### Methods

* [add](#static-add)
* [get](#static-get)
* [print](#static-print)
* [remove](#static-remove)

### Constructors

#### `Private` constructor

\+ **new ObserverMaps**(): *[ObserverMaps](#classesobservermapsmd)*

*Defined in [ObvserverMaps.ts:20](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L20)*

**Returns:** *[ObserverMaps](#classesobservermapsmd)*

### Properties

#### `Static` maps

▪ **maps**: *[ObserverMap](#observermap)[]* = []

*Defined in [ObvserverMaps.ts:22](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L22)*

### Methods

#### `Static` add

▸ **add**(`observer`: [IObserver](#interfacesiobservermd), `observable`: [IObservable](#interfacesiobservablemd), `chainHead?`: [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›): *void*

*Defined in [ObvserverMaps.ts:43](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L43)*

Adds a tuple of observer, observable and the head of the call's linked list.

**`memberof`** ObserverMaps

**`static`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) | The observable |
`observable` | [IObservable](#interfacesiobservablemd) | - |
`chainHead?` | [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)› | - |

**Returns:** *void*

___

#### `Static` get

▸ **get**(`observer`: [IObserver](#interfacesiobservermd)): *[ObserverMap](#observermap)[] | undefined*

*Defined in [ObvserverMaps.ts:59](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L59)*

Gets a tuple list of observer, observable and the head of the call's linked list for a given
`IObserver`

**`memberof`** ObserverMaps

**`static`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) | The observer to lookup |

**Returns:** *[ObserverMap](#observermap)[] | undefined*

___

#### `Static` print

▸ **print**(): *void*

*Defined in [ObvserverMaps.ts:30](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L30)*

Prints the current ObserverMaps for debugging purposes.

**`memberof`** ObserverMaps

**`static`** 

**Returns:** *void*

___

#### `Static` remove

▸ **remove**(`map`: [ObserverMap](#observermap)): *void*

*Defined in [ObvserverMaps.ts:70](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L70)*

Removes a tuple for a given `ObserverMap` instance

**`memberof`** ObserverMaps

**`static`** 

**Parameters:**

Name | Type |
------ | ------ |
`map` | [ObserverMap](#observermap) |

**Returns:** *void*


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

* [ObservableBase](#classesobservablebasemd)

  ↳ **OperatorBase**

  ↳ [MapOperator](#classesmapoperatormd)

  ↳ [FilterOperator](#classesfilteroperatormd)

### Implements

* [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [fn](#fn)
* [observable](#observable)
* [pipeHead](#optional-pipehead)

#### Methods

* [emit](#emit)
* [pipe](#pipe)
* [subscribe](#subscribe)

### Constructors

####  constructor

\+ **new OperatorBase**(`fn`: function): *[OperatorBase](#classesoperatorbasemd)*

*Overrides [ObservableBase](#classesobservablebasemd).[constructor](#constructor)*

*Defined in [operators/OperatorBase.ts:28](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L28)*

Constructs an `OperatorBase`.

** Warning: You should use this only by subclassing.

**Parameters:**

▪ **fn**: *function*

The function to apply to the item

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *[OperatorBase](#classesoperatorbasemd)*

### Properties

####  fn

• **fn**: *function*

*Defined in [operators/OperatorBase.ts:26](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L26)*

##### Type declaration:

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

___

####  observable

• **observable**: *[IObservable](#interfacesiobservablemd)*

*Defined in [operators/OperatorBase.ts:27](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L27)*

___

#### `Optional` pipeHead

• **pipeHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

*Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)*

*Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)*

*Defined in [operators/OperatorBase.ts:28](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L28)*

### Methods

####  emit

▸ **emit**(`item`: any): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [ObservableBase](#classesobservablebasemd).[emit](#emit)*

*Defined in [operators/OperatorBase.ts:48](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *void*

___

####  pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): *never*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)*

*Defined in [operators/OperatorBase.ts:52](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** *never*

___

####  subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)*

*Defined in [operators/OperatorBase.ts:44](https://github.com/tsaqib/trex/blob/7f81a5e/src/operators/OperatorBase.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) |

**Returns:** *void*


<a name="globalsmd"></a>

[@tsaqib/trex](#globalsmd)

# @tsaqib/trex

## Index

### Classes

* [FilterOperator](#classesfilteroperatormd)
* [MapOperator](#classesmapoperatormd)
* [Observable](#classesobservablemd)
* [ObservableBase](#classesobservablebasemd)
* [Observer](#classesobservermd)
* [ObserverMaps](#classesobservermapsmd)
* [OperatorBase](#classesoperatorbasemd)

### Interfaces

* [IObservable](#interfacesiobservablemd)
* [IObserver](#interfacesiobservermd)

### Type aliases

* [LinkedList](#linkedlist)
* [ObserverMap](#observermap)

### Functions

* [filter](#const-filter)
* [map](#const-map)
* [pipe](#const-pipe)
* [tap](#const-tap)

## Type aliases

###  LinkedList

Ƭ **LinkedList**: *object*

*Defined in [CommonHelpers.ts:7](https://github.com/tsaqib/trex/blob/7f81a5e/src/CommonHelpers.ts#L7)*

#### Type declaration:

* **next**? : *[LinkedList](#linkedlist)‹T›*

* **value**: *T*

___

###  ObserverMap

Ƭ **ObserverMap**: *object*

*Defined in [ObvserverMaps.ts:5](https://github.com/tsaqib/trex/blob/7f81a5e/src/ObvserverMaps.ts#L5)*

#### Type declaration:

* **chainHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

* **observable**: *[IObservable](#interfacesiobservablemd)*

* **observer**: *[IObserver](#interfacesiobservermd)*

## Functions

### `Const` filter

▸ **filter**(`fn`: function): *[FilterOperator](#classesfilteroperatormd)‹›*

*Defined in [CommonHelpers.ts:88](https://github.com/tsaqib/trex/blob/7f81a5e/src/CommonHelpers.ts#L88)*

Returns an item only when the specified predicate is true.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
pipe(
	filter((num) => num < 15),
	(num) => console.log(num * 4)
));
observable.subscribe(observer);
observable.emit(10);
observable.emit(20);
```

Output:
40

**Parameters:**

▪ **fn**: *function*

The predcate to check with the item

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *[FilterOperator](#classesfilteroperatormd)‹›*

___

### `Const` map

▸ **map**(`fn`: function): *[MapOperator](#classesmapoperatormd)‹›*

*Defined in [CommonHelpers.ts:62](https://github.com/tsaqib/trex/blob/7f81a5e/src/CommonHelpers.ts#L62)*

Executes standard 1:1 map function on an incoming item and returns the computed item back.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
pipe(
	map((num) => num * 3),
	(num) => console.log(num * 4)
));
observable.subscribe(observer);
observable.emit(10);
```

Output:
120

**Parameters:**

▪ **fn**: *function*

The function to apply on the item

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *[MapOperator](#classesmapoperatormd)‹›*

___

### `Const` pipe

▸ **pipe**(...`fns`: Function[]): *(Anonymous function)*

*Defined in [CommonHelpers.ts:115](https://github.com/tsaqib/trex/blob/7f81a5e/src/CommonHelpers.ts#L115)*

Pipes multiple observer operations together.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
pipe(
	filter((num) => num < 15),
	(num) => console.log(num * 4)
));
observable.subscribe(observer);
observable.emit(10);
observable.emit(20);
```

Output:
40

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...fns` | Function[] | The list of actions to form a chain of  |

**Returns:** *(Anonymous function)*

___

### `Const` tap

▸ **tap**(`fn`: function): *(Anonymous function)*

*Defined in [CommonHelpers.ts:34](https://github.com/tsaqib/trex/blob/7f81a5e/src/CommonHelpers.ts#L34)*

Execute the specified function on an incoming item and also returns the same item back.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer(
pipe(
	tap((num) => console.log(num * 3)),
	tap((num) => console.log(num * 4))
));
observable.subscribe(observer);
observable.emit(10);
```

Output:
30
40

**Parameters:**

▪ **fn**: *function*

The function to apply on the item

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *(Anonymous function)*

# Interfaces


<a name="interfacesiobservablemd"></a>

[@tsaqib/trex](#globalsmd) › [IObservable](#interfacesiobservablemd)

## Interface: IObservable

The interface behind the `ObservableBase`, maintains the contract for all observables.

**`interface`** 

### Hierarchy

* **IObservable**

### Implemented by

* [FilterOperator](#classesfilteroperatormd)
* [MapOperator](#classesmapoperatormd)
* [Observable](#classesobservablemd)
* [ObservableBase](#classesobservablebasemd)
* [OperatorBase](#classesoperatorbasemd)

### Index

#### Properties

* [pipeHead](#optional-pipehead)

#### Methods

* [destroy](#optional-destroy)
* [emit](#emit)
* [multicast](#multicast)
* [pipe](#pipe)
* [subscribe](#subscribe)
* [unsubscribe](#unsubscribe)

### Properties

#### `Optional` pipeHead

• **pipeHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

*Defined in [IObservable.ts:74](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L74)*

** Warning: Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.

**`memberof`** IObservable

### Methods

#### `Optional` destroy

▸ **destroy**(): *void*

*Defined in [IObservable.ts:137](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L137)*

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
const observable = new Observable();
const observer = new Observer((num) => {
	console.log(num / 2);
})
.subscribe(new Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** *void*

___

####  emit

▸ **emit**(`item`: any): *void*

*Defined in [IObservable.ts:66](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L66)*

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

Name | Type | Description |
------ | ------ | ------ |
`item` | any | The item to stream |

**Returns:** *void*

___

####  multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): *void*

*Defined in [IObservable.ts:118](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L118)*

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
const observable1 = new Observer((x) => console.log(x));
const observable2 = new Observer((x) => console.log(x * x));
const observable = new Observable();
observable
	.pipe(
		map(x => x * 2),
		filter(x => x > 5)
	)
	.multicast(observer1, observer2);
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...observers` | [IObserver](#interfacesiobservermd)[] | An array of `Observer` to update |

**Returns:** *void*

___

####  pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): *[IObservable](#interfacesiobservablemd)*

*Defined in [IObservable.ts:95](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L95)*

Pipes a series of operations per item in the stream

Basic usage example:

```ts
const observable = new Observable();
observable
	.pipe(
		map(x => x * 2),
		filter(x => x > 5)
	)
	.subscribe(new Observer((x) => console.log(x)));
observable.emit(50);
```

**`memberof`** IObservable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...observables` | [IObservable](#interfacesiobservablemd)[] | The observables that form a chain of actions. |

**Returns:** *[IObservable](#interfacesiobservablemd)*

___

####  subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Defined in [IObservable.ts:27](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L27)*

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

Name | Type | Description |
------ | ------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** *void*

___

####  unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Defined in [IObservable.ts:47](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObservable.ts#L47)*

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

Name | Type | Description |
------ | ------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** *void*


<a name="interfacesiobservermd"></a>

[@tsaqib/trex](#globalsmd) › [IObserver](#interfacesiobservermd)

## Interface: IObserver

The interface behind the `Observer`, maintains the contract for all observers.

**`interface`** 

### Hierarchy

* **IObserver**

### Implemented by

* [Observer](#classesobservermd)

### Index

#### Properties

* [next](#next)

#### Methods

* [error](#optional-error)

### Properties

####  next

• **next**: *function*

*Defined in [IObserver.ts:13](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObserver.ts#L13)*

Whenever a new item is available in the stream, the `next` function is called with that.

**`param`** The item newly arrived in the stream.

**`memberof`** IObserver

##### Type declaration:

▸ (`item`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

### Methods

#### `Optional` error

▸ **error**(`err`: any): *void*

*Defined in [IObserver.ts:21](https://github.com/tsaqib/trex/blob/7f81a5e/src/IObserver.ts#L21)*

The error handler for the potential exception occured inside the `next` function.

**`memberof`** IObserver

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | any | The error object. |

**Returns:** *void*
