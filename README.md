## Reactive Extension in TypeScript (TRex)

The computations that each of ours activities cause for free applications such as Facebook and Google are incredibly expensive. Even if you had billions of dollars an optimized and profitable solution squeezing out of those dollars is still very much non-trivial. Such immense scale applications we use everyday are built on top of the reactive programming paradigm to help them process data only when needed. Only responding to a relevant query results in massive cost savings. Thus, allowing internet-scale applications serve us instantly without charging us \$.

This package helps you do functional reactive programming both on server-side and front-end apps. It helps you define and destroy data streams easily which works as an event bus. You can subscribe
and unsubscribe to the streams. You can perform map, filter and pass on your own functions both at the observables and observers-level.

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
const coworkersNotifier = new TRex.Observer((message) => {
	TRex.pipe(
		(message: string) => formatMessage(message),
		TRex.tap((num) => console.log(`Sending message: ${message}`)),
		(message: string) => emailer.send(message)
	);
});
const channelUpdater = new TRex.Observer((message) => {
  // TODO: update #office channel
}
const analyticsTracker = new TRex.Observer((message) => {
  // TODO: track analytics
});

messageObservable
	.pipe(
		TRex.map((message) => parseJSON(message)),
		TRex.map((json) => validateMessage(json)),
		TRex.filter((message) => message.urgent)
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

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd)

# Classes

<a name="classesfilteroperatormd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [FilterOperator](#classesfilteroperatormd)

## Class: FilterOperator

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
- [observers](#observers)
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

Defined in operators/OperatorBase.ts:10

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

Defined in operators/OperatorBase.ts:8

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

Defined in operators/OperatorBase.ts:9

---

#### observers

• **observers**: _[IObserver](#interfacesiobservermd)[]_

_Inherited from [ObservableBase](#classesobservablebasemd).[observers](#observers)_

_Defined in [ObservableBase.ts:14](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L14)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipeHead](#optional-pipehead)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

Defined in operators/OperatorBase.ts:10

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:100](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L100)_

**Returns:** _void_

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [OperatorBase](#classesoperatorbasemd).[emit](#emit)_

Defined in operators/FilterOperator.ts:4

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

_Defined in [ObservableBase.ts:88](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L88)_

**Parameters:**

| Name           | Type                                  |
| -------------- | ------------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** _void_

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _never_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipe](#pipe)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

Defined in operators/OperatorBase.ts:26

**Parameters:**

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** _never_

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[subscribe](#subscribe)_

_Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

Defined in operators/OperatorBase.ts:18

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:28](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L28)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

<a name="classesmapoperatormd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [MapOperator](#classesmapoperatormd)

## Class: MapOperator

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
- [observers](#observers)
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

Defined in operators/OperatorBase.ts:10

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

Defined in operators/OperatorBase.ts:8

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

Defined in operators/OperatorBase.ts:9

---

#### observers

• **observers**: _[IObserver](#interfacesiobservermd)[]_

_Inherited from [ObservableBase](#classesobservablebasemd).[observers](#observers)_

_Defined in [ObservableBase.ts:14](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L14)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipeHead](#optional-pipehead)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

Defined in operators/OperatorBase.ts:10

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:100](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L100)_

**Returns:** _void_

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[emit](#emit)_

_Overrides [ObservableBase](#classesobservablebasemd).[emit](#emit)_

Defined in operators/OperatorBase.ts:22

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

_Defined in [ObservableBase.ts:88](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L88)_

**Parameters:**

| Name           | Type                                  |
| -------------- | ------------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** _void_

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _never_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[pipe](#pipe)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

Defined in operators/OperatorBase.ts:26

**Parameters:**

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** _never_

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [OperatorBase](#classesoperatorbasemd).[subscribe](#subscribe)_

_Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

Defined in operators/OperatorBase.ts:18

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:28](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L28)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

<a name="classesobservablemd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [Observable](#classesobservablemd)

## Class: Observable

The first class you must instantiate is the `Observable`. An `Observable` listens to the
streams of data and passes on to its observers. You use the `subscribe` function to subscribe
and `emit` function to add a new data to the stream.

`Observer` is essentially a placeholder for `ObservableBase`. Most of the logic is inside the
latter.

### Hierarchy

- [ObservableBase](#classesobservablebasemd)

  ↳ **Observable**

### Implements

- [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

- [constructor](#constructor)

#### Properties

- [observers](#observers)
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

_Defined in [ObservableBase.ts:15](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L15)_

**Returns:** _[Observable](#classesobservablemd)_

### Properties

#### observers

• **observers**: _[IObserver](#interfacesiobservermd)[]_

_Inherited from [ObservableBase](#classesobservablebasemd).[observers](#observers)_

_Defined in [ObservableBase.ts:14](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L14)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Inherited from [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

_Defined in [ObservableBase.ts:15](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L15)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:100](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L100)_

**Returns:** _void_

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[emit](#emit)_

_Defined in [ObservableBase.ts:50](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L50)_

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

_Defined in [ObservableBase.ts:88](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L88)_

**Parameters:**

| Name           | Type                                  |
| -------------- | ------------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** _void_

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _[IObservable](#interfacesiobservablemd)_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

_Defined in [ObservableBase.ts:66](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L66)_

**Parameters:**

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** _[IObservable](#interfacesiobservablemd)_

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

_Defined in [ObservableBase.ts:22](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L22)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:28](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L28)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

<a name="classesobservablebasemd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [ObservableBase](#classesobservablebasemd)

## Class: ObservableBase

The `ObservableBase` class, implements `IObservable`, but is not for public instantiation.
The first class you must instantiate is the `Observable` which is a placeholder for
`ObservableBase`.

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

- [observers](#observers)
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

_Defined in [ObservableBase.ts:15](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L15)_

**Returns:** _[ObservableBase](#classesobservablebasemd)_

### Properties

#### observers

• **observers**: _[IObserver](#interfacesiobservermd)[]_

_Defined in [ObservableBase.ts:14](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L14)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Defined in [ObservableBase.ts:15](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L15)_

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:100](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L100)_

**Returns:** _void_

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:50](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L50)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _void_

---

#### multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:88](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L88)_

**Parameters:**

| Name           | Type                                  |
| -------------- | ------------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** _void_

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _[IObservable](#interfacesiobservablemd)_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:66](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L66)_

**Parameters:**

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** _[IObservable](#interfacesiobservablemd)_

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:22](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L22)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Defined in [ObservableBase.ts:28](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L28)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

<a name="classesobservermd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [Observer](#classesobservermd)

## Class: Observer

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

\+ **new Observer**(`next`: function, `error?`: any): _[Observer](#classesobservermd)_

_Defined in [Observer.ts:5](https://github.com/tsaqib/trex/blob/b6fab0f/src/Observer.ts#L5)_

**Parameters:**

▪ **next**: _function_

▸ (`item`: any): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

▪`Optional` **error**: _any_

**Returns:** _[Observer](#classesobservermd)_

### Properties

#### `Optional` error

• **error**? : _undefined | function_

_Implementation of [IObserver](#interfacesiobservermd).[error](#optional-error)_

_Defined in [Observer.ts:5](https://github.com/tsaqib/trex/blob/b6fab0f/src/Observer.ts#L5)_

---

#### next

• **next**: _function_

_Implementation of [IObserver](#interfacesiobservermd).[next](#next)_

_Defined in [Observer.ts:4](https://github.com/tsaqib/trex/blob/b6fab0f/src/Observer.ts#L4)_

##### Type declaration:

▸ (`item`: any): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

<a name="classesobservermapsmd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [ObserverMaps](#classesobservermapsmd)

## Class: ObserverMaps

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

Defined in ObvserverMaps.ts:11

**Returns:** _[ObserverMaps](#classesobservermapsmd)_

### Properties

#### `Static` maps

▪ **maps**: _[ObserverMap](#observermap)[]_ = []

Defined in ObvserverMaps.ts:13

### Methods

#### `Static` add

▸ **add**(`observer`: [IObserver](#interfacesiobservermd), `observable`: [IObservable](#interfacesiobservablemd), `chainHead?`: [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›): _void_

Defined in ObvserverMaps.ts:19

**Parameters:**

| Name         | Type                                                               |
| ------------ | ------------------------------------------------------------------ |
| `observer`   | [IObserver](#interfacesiobservermd)                                |
| `observable` | [IObservable](#interfacesiobservablemd)                            |
| `chainHead?` | [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)› |

**Returns:** _void_

---

#### `Static` get

▸ **get**(`observer`: [IObserver](#interfacesiobservermd)): _[ObserverMap](#observermap)[] | undefined_

Defined in ObvserverMaps.ts:27

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _[ObserverMap](#observermap)[] | undefined_

---

#### `Static` print

▸ **print**(): _void_

Defined in ObvserverMaps.ts:15

**Returns:** _void_

---

#### `Static` remove

▸ **remove**(`map`: [ObserverMap](#observermap)): _void_

Defined in ObvserverMaps.ts:31

**Parameters:**

| Name  | Type                        |
| ----- | --------------------------- |
| `map` | [ObserverMap](#observermap) |

**Returns:** _void_

<a name="classesoperatorbasemd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [OperatorBase](#classesoperatorbasemd)

## Class: OperatorBase

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
- [observers](#observers)
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

Defined in operators/OperatorBase.ts:10

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

Defined in operators/OperatorBase.ts:8

##### Type declaration:

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

---

#### observable

• **observable**: _[IObservable](#interfacesiobservablemd)_

Defined in operators/OperatorBase.ts:9

---

#### observers

• **observers**: _[IObserver](#interfacesiobservermd)[]_

_Inherited from [ObservableBase](#classesobservablebasemd).[observers](#observers)_

_Defined in [ObservableBase.ts:14](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L14)_

---

#### `Optional` pipeHead

• **pipeHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

_Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipeHead](#optional-pipehead)_

Defined in operators/OperatorBase.ts:10

### Methods

#### destroy

▸ **destroy**(): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[destroy](#destroy)_

_Defined in [ObservableBase.ts:100](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L100)_

**Returns:** _void_

---

#### emit

▸ **emit**(`item`: any): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[emit](#emit)_

Defined in operators/OperatorBase.ts:22

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

_Defined in [ObservableBase.ts:88](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L88)_

**Parameters:**

| Name           | Type                                  |
| -------------- | ------------------------------------- |
| `...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** _void_

---

#### pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): _never_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[pipe](#pipe)_

Defined in operators/OperatorBase.ts:26

**Parameters:**

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| `...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** _never_

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Overrides [ObservableBase](#classesobservablebasemd).[subscribe](#subscribe)_

Defined in operators/OperatorBase.ts:18

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

---

#### unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Implementation of [IObservable](#interfacesiobservablemd)_

_Inherited from [ObservableBase](#classesobservablebasemd).[unsubscribe](#unsubscribe)_

_Defined in [ObservableBase.ts:28](https://github.com/tsaqib/trex/blob/b6fab0f/src/ObservableBase.ts#L28)_

**Parameters:**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) |

**Returns:** _void_

<a name="globalsmd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd)

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

_Defined in [CommonHelpers.ts:7](https://github.com/tsaqib/trex/blob/b6fab0f/src/CommonHelpers.ts#L7)_

#### Type declaration:

- **next**? : _[LinkedList](#linkedlist)‹T›_

- **value**: _T_

---

### ObserverMap

Ƭ **ObserverMap**: _object_

Defined in ObvserverMaps.ts:5

#### Type declaration:

- **chainHead**? : _[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›_

- **observable**: _[IObservable](#interfacesiobservablemd)_

- **observer**: _[IObserver](#interfacesiobservermd)_

## Functions

### `Const` filter

▸ **filter**(`fn`: function): _[FilterOperator](#classesfilteroperatormd)‹›_

_Defined in [CommonHelpers.ts:23](https://github.com/tsaqib/trex/blob/b6fab0f/src/CommonHelpers.ts#L23)_

**Parameters:**

▪ **fn**: _function_

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[FilterOperator](#classesfilteroperatormd)‹›_

---

### `Const` map

▸ **map**(`fn`: function): _[MapOperator](#classesmapoperatormd)‹›_

_Defined in [CommonHelpers.ts:19](https://github.com/tsaqib/trex/blob/b6fab0f/src/CommonHelpers.ts#L19)_

**Parameters:**

▪ **fn**: _function_

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _[MapOperator](#classesmapoperatormd)‹›_

---

### `Const` pipe

▸ **pipe**(...`fns`: Function[]): _(Anonymous function)_

_Defined in [CommonHelpers.ts:28](https://github.com/tsaqib/trex/blob/b6fab0f/src/CommonHelpers.ts#L28)_

**Parameters:**

| Name     | Type       |
| -------- | ---------- |
| `...fns` | Function[] |

**Returns:** _(Anonymous function)_

---

### `Const` tap

▸ **tap**(`fn`: function): _(Anonymous function)_

_Defined in [CommonHelpers.ts:12](https://github.com/tsaqib/trex/blob/b6fab0f/src/CommonHelpers.ts#L12)_

**Parameters:**

▪ **fn**: _function_

▸ (`item`: any): _any_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | any  |

**Returns:** _(Anonymous function)_

# Interfaces

<a name="interfacesiobservablemd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [IObservable](#interfacesiobservablemd)

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

_Defined in [IObservable.ts:43](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L43)_

Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.

**`memberof`** IObservable

### Methods

#### `Optional` destroy

▸ **destroy**(): _void_

_Defined in [IObservable.ts:69](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L69)_

Destroyes an `Observable` along with all its subscribers.

**`memberof`** IObservable

**Returns:** _void_

void

---

#### emit

▸ **emit**(`item`: any): _void_

_Defined in [IObservable.ts:35](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L35)_

Emits an item to the stream

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

_Defined in [IObservable.ts:61](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L61)_

Subscribes an array of observers in one go, typically followed by a pipe.

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

_Defined in [IObservable.ts:52](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L52)_

Pipes a series of operations per item in the stream

**`memberof`** IObservable

**Parameters:**

| Name             | Type                                      | Description        |
| ---------------- | ----------------------------------------- | ------------------ |
| `...observables` | [IObservable](#interfacesiobservablemd)[] | The item to stream |

**Returns:** _[IObservable](#interfacesiobservablemd)_

IObservable

---

#### subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): _void_

_Defined in [IObservable.ts:17](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L17)_

Subscribes an `Observer` instance

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

_Defined in [IObservable.ts:26](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObservable.ts#L26)_

Unsubscribes an `Observer` instance

**`memberof`** IObservable

**Parameters:**

| Name       | Type                                | Description                                         |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `observer` | [IObserver](#interfacesiobservermd) | The `Observer` instance to be subscribed for update |

**Returns:** _void_

void

<a name="interfacesiobservermd"></a>

[@tsaqib/trex](#readmemd) › [Globals](#globalsmd) › [IObserver](#interfacesiobservermd)

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

_Defined in [IObserver.ts:14](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObserver.ts#L14)_

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

_Defined in [IObserver.ts:23](https://github.com/tsaqib/trex/blob/b6fab0f/src/IObserver.ts#L23)_

The error handler for the potential exception occured inside the `next` function.

**`memberof`** IObserver

**Parameters:**

| Name  | Type | Description       |
| ----- | ---- | ----------------- |
| `err` | any  | The error object. |

**Returns:** _void_

void
