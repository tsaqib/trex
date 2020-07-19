<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


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
    - [Index](#index-1)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods-1)
  - [Class: Observer](#class-observer)
    - [Hierarchy](#hierarchy-3)
    - [Implements](#implements-3)
    - [Index](#index-2)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
  - [Class: OperatorBase](#class-operatorbase)
    - [Hierarchy](#hierarchy-4)
    - [Implements](#implements-4)
    - [Index](#index-3)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: PluckOperator](#class-pluckoperator)
    - [Hierarchy](#hierarchy-5)
    - [Implements](#implements-5)
    - [Index](#index-4)
    - [Constructors](#constructors-3)
    - [Properties](#properties-3)
    - [Methods](#methods-3)
  - [Class: TakeOperator](#class-takeoperator)
    - [Hierarchy](#hierarchy-6)
    - [Implements](#implements-6)
    - [Index](#index-5)
    - [Constructors](#constructors-4)
    - [Properties](#properties-4)
    - [Methods](#methods-4)
  - [Class: TxContext](#class-txcontext)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-6)
    - [Constructors](#constructors-5)
    - [Properties](#properties-5)
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
    - [`Const` pluck](#const-pluck)
    - [`Const` take](#const-take)
- [Interfaces](#interfaces-1)
  - [Interface: IObservable](#interface-iobservable)
    - [Hierarchy](#hierarchy-8)
    - [Implemented by](#implemented-by)
    - [Index](#index-8)
    - [Properties](#properties-6)
    - [Methods](#methods-6)
  - [Interface: IObserver](#interface-iobserver)
    - [Hierarchy](#hierarchy-9)
    - [Implemented by](#implemented-by-1)
    - [Index](#index-9)
    - [Properties](#properties-7)
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
the predicate, it returns back the item. As a result, the observers get the item on emit.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observer = new tx.Observer(console.log);
observable
	.pipe(
		tx.map((num) => num * 3),
		tx.filter((num) => num > 10)
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

*Overrides [OperatorBase](#classesoperatorbasemd).[emit](#emit)*

*Defined in [operators/FilterOperator.ts:32](https://github.com/tsaqib/trex/blob/65d6299/src/operators/FilterOperator.ts#L32)*

Applies the specified predicate on the item and returns it when the predicate returns true.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any | The item  |

**Returns:** *void*


<a name="classesmapoperatormd"></a>

[@tsaqib/trex](#globalsmd) › [MapOperator](#classesmapoperatormd)

## Class: MapOperator

Executes standard 1:1 map function on an incoming item and returns the computed item back.
The default behaviour of the `OperatorBase` is `MapOperator`. Therefore, this class is
a placeholder.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observer = new tx.Observer(console.log);
observable
	.pipe(
		tx.map((num) => num * 2),
		tx.map((num) => num * 3)
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

An `Observable` listens to the streams of data and passes on to its observers.
You use the `subscribe` function to subscribe and `emit` function to add a new data to
the stream.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observable = new Observable();
```

**`implements`** {IObservable}

### Hierarchy

* **Observable**

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

\+ **new Observable**(): *[Observable](#classesobservablemd)*

*Defined in [Observable.ts:26](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L26)*

Constructs an `Observable`, which is an implementation of `IObservable`.

**Returns:** *[Observable](#classesobservablemd)*

### Properties

#### `Private` observers

• **observers**: *[IObserver](#interfacesiobservermd)[]*

*Defined in [Observable.ts:25](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L25)*

___

#### `Optional` pipeHead

• **pipeHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

*Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)*

*Defined in [Observable.ts:26](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L26)*

### Methods

####  destroy

▸ **destroy**(): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [Observable.ts:131](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L131)*

**Returns:** *void*

___

####  emit

▸ **emit**(`items`: any | any[]): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [Observable.ts:68](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any &#124; any[] |

**Returns:** *void*

___

####  multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [Observable.ts:118](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`...observers` | [IObserver](#interfacesiobservermd)[] |

**Returns:** *void*

___

####  pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): *[IObservable](#interfacesiobservablemd)*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [Observable.ts:96](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** *[IObservable](#interfacesiobservablemd)*

___

####  subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [Observable.ts:38](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) |

**Returns:** *void*

___

####  unsubscribe

▸ **unsubscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Defined in [Observable.ts:44](https://github.com/tsaqib/trex/blob/65d6299/src/Observable.ts#L44)*

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

*Defined in [Observer.ts:12](https://github.com/tsaqib/trex/blob/65d6299/src/Observer.ts#L12)*

Constructs an `Observer`.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

// The Observer is the implementation of IObserver
const observer1 = new tx.Observer(
	(item: string) => console.log(item),
	(err: any) => console.error(err);
)
const observer2 = new tx.Observer(console.log);
```

**Parameters:**

▪ **next**: *function*

The function to invoke on data arrival

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

*Defined in [Observer.ts:12](https://github.com/tsaqib/trex/blob/65d6299/src/Observer.ts#L12)*

___

####  next

• **next**: *function*

*Implementation of [IObserver](#interfacesiobservermd).[next](#next)*

*Defined in [Observer.ts:11](https://github.com/tsaqib/trex/blob/65d6299/src/Observer.ts#L11)*

##### Type declaration:

▸ (`item`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |


<a name="classesoperatorbasemd"></a>

[@tsaqib/trex](#globalsmd) › [OperatorBase](#classesoperatorbasemd)

## Class: OperatorBase

This class provides you the basis for your own operators and operators that are included in
this package already. Operators inherit from `Observable`, so they have same methods and
properties.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

class Squarer : OperatorBase {
	emit (item: number) {
		this.observable.emit(item * item);
	}
}
```

### Hierarchy

* [Observable](#classesobservablemd)

  ↳ **OperatorBase**

  ↳ [MapOperator](#classesmapoperatormd)

  ↳ [FilterOperator](#classesfilteroperatormd)

  ↳ [TakeOperator](#classestakeoperatormd)

  ↳ [PluckOperator](#classespluckoperatormd)

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

*Overrides [Observable](#classesobservablemd).[constructor](#constructor)*

*Defined in [operators/OperatorBase.ts:30](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L30)*

Constructs an `OperatorBase`.

** Warning: You should use this only by subclassing.

**Parameters:**

▪ **fn**: *function*

The function to apply to the item

▸ (`item`: any): *function*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

▸ (): *void*

**Returns:** *[OperatorBase](#classesoperatorbasemd)*

### Properties

####  fn

• **fn**: *function*

*Defined in [operators/OperatorBase.ts:28](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L28)*

##### Type declaration:

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

___

####  observable

• **observable**: *[IObservable](#interfacesiobservablemd)*

*Defined in [operators/OperatorBase.ts:29](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L29)*

___

#### `Optional` pipeHead

• **pipeHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

*Implementation of [IObservable](#interfacesiobservablemd).[pipeHead](#optional-pipehead)*

*Overrides [Observable](#classesobservablemd).[pipeHead](#optional-pipehead)*

*Defined in [operators/OperatorBase.ts:30](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L30)*

### Methods

####  emit

▸ **emit**(`item`: any | any[]): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [Observable](#classesobservablemd).[emit](#emit)*

*Defined in [operators/OperatorBase.ts:50](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any &#124; any[] |

**Returns:** *void*

___

####  pipe

▸ **pipe**(...`observables`: [IObservable](#interfacesiobservablemd)[]): *never*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [Observable](#classesobservablemd).[pipe](#pipe)*

*Defined in [operators/OperatorBase.ts:54](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`...observables` | [IObservable](#interfacesiobservablemd)[] |

**Returns:** *never*

___

####  subscribe

▸ **subscribe**(`observer`: [IObserver](#interfacesiobservermd)): *void*

*Implementation of [IObservable](#interfacesiobservablemd)*

*Overrides [Observable](#classesobservablemd).[subscribe](#subscribe)*

*Defined in [operators/OperatorBase.ts:46](https://github.com/tsaqib/trex/blob/65d6299/src/operators/OperatorBase.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) |

**Returns:** *void*


<a name="classespluckoperatormd"></a>

[@tsaqib/trex](#globalsmd) › [PluckOperator](#classespluckoperatormd)

## Class: PluckOperator

This operator returns the specified property of a value.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observable = new tx.Observable();
observable
	.pipe(tx.take(1), tx.pluck('email'))
	.subscribe(new tx.Observer(console.log));
observable.emit({ name: 'King', email: 'email@kingdom' });
observable.emit({ name: 'Queen', email: 'email@queendom' });
```

Output:
email@kingdom

### Hierarchy

  ↳ [OperatorBase](#classesoperatorbasemd)

  ↳ **PluckOperator**

### Implements

* [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [propName](#private-propname)

#### Methods

* [emit](#emit)

### Constructors

####  constructor

\+ **new PluckOperator**(`propName`: string): *[PluckOperator](#classespluckoperatormd)*

*Overrides [OperatorBase](#classesoperatorbasemd).[constructor](#constructor)*

*Defined in [operators/PluckOperator.ts:26](https://github.com/tsaqib/trex/blob/65d6299/src/operators/PluckOperator.ts#L26)*

Constructs the `PluckOperator`

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`propName` | string | "" |

**Returns:** *[PluckOperator](#classespluckoperatormd)*

### Properties

#### `Private` propName

• **propName**: *string*

*Defined in [operators/PluckOperator.ts:31](https://github.com/tsaqib/trex/blob/65d6299/src/operators/PluckOperator.ts#L31)*

### Methods

####  emit

▸ **emit**(`item`: any): *void*

*Overrides [OperatorBase](#classesoperatorbasemd).[emit](#emit)*

*Defined in [operators/PluckOperator.ts:44](https://github.com/tsaqib/trex/blob/65d6299/src/operators/PluckOperator.ts#L44)*

Emits the property of an item as specified by the propName in the PluckOperator's constructor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any | The item  |

**Returns:** *void*


<a name="classestakeoperatormd"></a>

[@tsaqib/trex](#globalsmd) › [TakeOperator](#classestakeoperatormd)

## Class: TakeOperator

This operator keeps the count of the items it has encountered and only allow them to pass
through as long as it does not exceed a specified total count.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observer = new tx.Observer(console.log);
observable.pipe(tx.take(3)).subscribe(observer);
observable.emit([10, 20, 30, 40, 50, 60]);
```

Output:
10
20
30

### Hierarchy

  ↳ [OperatorBase](#classesoperatorbasemd)

  ↳ **TakeOperator**

### Implements

* [IObservable](#interfacesiobservablemd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [count](#private-count)
* [total](#total)

#### Methods

* [emit](#emit)

### Constructors

####  constructor

\+ **new TakeOperator**(`count`: number): *[TakeOperator](#classestakeoperatormd)*

*Overrides [OperatorBase](#classesoperatorbasemd).[constructor](#constructor)*

*Defined in [operators/TakeOperator.ts:27](https://github.com/tsaqib/trex/blob/65d6299/src/operators/TakeOperator.ts#L27)*

Constructs the `TakeOperator`

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 0 |

**Returns:** *[TakeOperator](#classestakeoperatormd)*

### Properties

#### `Private` count

• **count**: *number*

*Defined in [operators/TakeOperator.ts:32](https://github.com/tsaqib/trex/blob/65d6299/src/operators/TakeOperator.ts#L32)*

___

####  total

• **total**: *number* = 0

*Defined in [operators/TakeOperator.ts:27](https://github.com/tsaqib/trex/blob/65d6299/src/operators/TakeOperator.ts#L27)*

### Methods

####  emit

▸ **emit**(`item`: any): *void*

*Overrides [OperatorBase](#classesoperatorbasemd).[emit](#emit)*

*Defined in [operators/TakeOperator.ts:43](https://github.com/tsaqib/trex/blob/65d6299/src/operators/TakeOperator.ts#L43)*

Emits the item as long as the current count of items doesn't exceed the total allocated
by `count`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any | The item  |

**Returns:** *void*


<a name="classestxcontextmd"></a>

[@tsaqib/trex](#globalsmd) › [TxContext](#classestxcontextmd)

## Class: TxContext

This is an internal class and not meant for public use, maintains internal states

** Warning: You should never use this class.

### Hierarchy

* **TxContext**

### Index

#### Constructors

* [constructor](#private-constructor)

#### Properties

* [maps](#static-maps)

#### Methods

* [addMap](#static-addmap)
* [getMap](#static-getmap)
* [print](#static-print)
* [removeMap](#static-removemap)

### Constructors

#### `Private` constructor

\+ **new TxContext**(): *[TxContext](#classestxcontextmd)*

*Defined in [TxContext.ts:19](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L19)*

**Returns:** *[TxContext](#classestxcontextmd)*

### Properties

#### `Static` maps

▪ **maps**: *[ObserverMap](#observermap)[]* = []

*Defined in [TxContext.ts:22](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L22)*

### Methods

#### `Static` addMap

▸ **addMap**(`observer`: [IObserver](#interfacesiobservermd), `observable`: [IObservable](#interfacesiobservablemd), `chainHead?`: [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›): *void*

*Defined in [TxContext.ts:44](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L44)*

Adds a tuple of observer, observable and the head of the call's linked list.

**`memberof`** TxContext

**`static`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) | The observable |
`observable` | [IObservable](#interfacesiobservablemd) | - |
`chainHead?` | [LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)› | - |

**Returns:** *void*

___

#### `Static` getMap

▸ **getMap**(`observer`: [IObserver](#interfacesiobservermd)): *[ObserverMap](#observermap)[] | undefined*

*Defined in [TxContext.ts:60](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L60)*

Gets a tuple list of observer, observable and the head of the call's linked list for a given
`IObserver`

**`memberof`** TxContext

**`static`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [IObserver](#interfacesiobservermd) | The observer to lookup |

**Returns:** *[ObserverMap](#observermap)[] | undefined*

___

#### `Static` print

▸ **print**(): *void*

*Defined in [TxContext.ts:31](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L31)*

**Returns:** *void*

___

#### `Static` removeMap

▸ **removeMap**(`map`: [ObserverMap](#observermap)): *void*

*Defined in [TxContext.ts:71](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L71)*

Removes a tuple for a given `ObserverMap` instance

**`memberof`** TxContext

**`static`** 

**Parameters:**

Name | Type |
------ | ------ |
`map` | [ObserverMap](#observermap) |

**Returns:** *void*


<a name="globalsmd"></a>

[@tsaqib/trex](#globalsmd)

# @tsaqib/trex

## Index

### Classes

* [FilterOperator](#classesfilteroperatormd)
* [MapOperator](#classesmapoperatormd)
* [Observable](#classesobservablemd)
* [Observer](#classesobservermd)
* [OperatorBase](#classesoperatorbasemd)
* [PluckOperator](#classespluckoperatormd)
* [TakeOperator](#classestakeoperatormd)
* [TxContext](#classestxcontextmd)

### Interfaces

* [IObservable](#interfacesiobservablemd)
* [IObserver](#interfacesiobservermd)

### Type aliases

* [LinkedList](#linkedlist)
* [ObserverMap](#observermap)

### Functions

* [filter](#const-filter)
* [map](#const-map)
* [pluck](#const-pluck)
* [take](#const-take)

## Type aliases

###  LinkedList

Ƭ **LinkedList**: *object*

*Defined in [Shorthands.ts:7](https://github.com/tsaqib/trex/blob/65d6299/src/Shorthands.ts#L7)*

#### Type declaration:

* **next**? : *[LinkedList](#linkedlist)‹T›*

* **value**: *T*

___

###  ObserverMap

Ƭ **ObserverMap**: *object*

*Defined in [TxContext.ts:5](https://github.com/tsaqib/trex/blob/65d6299/src/TxContext.ts#L5)*

#### Type declaration:

* **chainHead**? : *[LinkedList](#linkedlist)‹[IObservable](#interfacesiobservablemd)›*

* **observable**: *[IObservable](#interfacesiobservablemd)*

* **observer**: *[IObserver](#interfacesiobservermd)*

## Functions

### `Const` filter

▸ **filter**(`fn`: function): *[FilterOperator](#classesfilteroperatormd)‹›*

*Defined in [Shorthands.ts:68](https://github.com/tsaqib/trex/blob/65d6299/src/Shorthands.ts#L68)*

Returns an item only when the specified predicate is true.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

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

▸ (`item`: any): *function*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

▸ (): *void*

**Returns:** *[FilterOperator](#classesfilteroperatormd)‹›*

___

### `Const` map

▸ **map**(`fn`: function): *[MapOperator](#classesmapoperatormd)‹›*

*Defined in [Shorthands.ts:37](https://github.com/tsaqib/trex/blob/65d6299/src/Shorthands.ts#L37)*

Executes standard 1:1 map function on an incoming item and returns the computed item back.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observer = new tx.Observer(console.log);
const observable = new Observable();
observable
	.pipe(
		tx.map((num: number) => num * 2),
		tx.map((num: number) => num * 3)
	)
.subscribe(observer);
observable.emit(10);
```

Output:
60

**Parameters:**

▪ **fn**: *function*

The function to apply on the item

▸ (`item`: any): *function*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

▸ (): *void*

**Returns:** *[MapOperator](#classesmapoperatormd)‹›*

___

### `Const` pluck

▸ **pluck**(`propName`: string): *[PluckOperator](#classespluckoperatormd)‹›*

*Defined in [Shorthands.ts:121](https://github.com/tsaqib/trex/blob/65d6299/src/Shorthands.ts#L121)*

Returns the specified property of a value.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observable = new tx.Observable();
observable
	.pipe(tx.take(1), tx.pluck('email'))
	.subscribe(new tx.Observer(console.log));
observable.emit({ name: 'King', email: 'email@kingdom' });
observable.emit({ name: 'Queen', email: 'email@queendom' });
```

Output:
email@kingdom

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`propName` | string | The name of the property to return from the item  |

**Returns:** *[PluckOperator](#classespluckoperatormd)‹›*

___

### `Const` take

▸ **take**(`count`: number): *[TakeOperator](#classestakeoperatormd)‹›*

*Defined in [Shorthands.ts:95](https://github.com/tsaqib/trex/blob/65d6299/src/Shorthands.ts#L95)*

Returns up to a specified number of items.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observer = new tx.Observer(console.log);
observable.pipe(tx.take(3)).subscribe(observer);
observable.emit([10, 20, 30, 40, 50, 60]);
```

Output:
10
20
30

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number | The total number of items will be allowed to pass through further  |

**Returns:** *[TakeOperator](#classestakeoperatormd)‹›*

# Interfaces


<a name="interfacesiobservablemd"></a>

[@tsaqib/trex](#globalsmd) › [IObservable](#interfacesiobservablemd)

## Interface: IObservable

The interface behind the `Observable`, maintains the contract for all observables.

**`interface`** 

### Hierarchy

* **IObservable**

### Implemented by

* [FilterOperator](#classesfilteroperatormd)
* [MapOperator](#classesmapoperatormd)
* [Observable](#classesobservablemd)
* [OperatorBase](#classesoperatorbasemd)
* [PluckOperator](#classespluckoperatormd)
* [TakeOperator](#classestakeoperatormd)

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

*Defined in [IObservable.ts:80](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L80)*

** Warning: Do not use this. This is an internal pointer for tracking and cleaning up subscriptions.

**`memberof`** IObservable

### Methods

#### `Optional` destroy

▸ **destroy**(): *void*

*Defined in [IObservable.ts:156](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L156)*

Destroys an `Observable` along with all its subscribers.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

// Observer is an implementation of IObservable
const observable = new tx.Observable();
const observer = new tx.Observer((num) => {
	console.log(num / 2);
})
.subscribe(new tx.Observer((x) => console.log(x)));
observable.emit(10);
observable.destroy();
```

**`memberof`** IObservable

**Returns:** *void*

___

####  emit

▸ **emit**(`item`: any | any[]): *void*

*Defined in [IObservable.ts:72](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L72)*

Emits an item to the stream

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

// Observer is an implementation of IObservable
const observable = new tx.Observable();
const observer = new tx.Observer(console.log);
observable.subscribe(observer);
observable.emit(10);
```

**`memberof`** IObservable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | any &#124; any[] | The item(s) to stream; can be an array, too |

**Returns:** *void*

___

####  multicast

▸ **multicast**(...`observers`: [IObserver](#interfacesiobservermd)[]): *void*

*Defined in [IObservable.ts:133](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L133)*

Subscribes an array of observers in one go, typically followed by a pipe.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

const observable1 = new tx.Observer(console.log);
const observable2 = new tx.Observer((x) => console.log(x * x));

// Observer is an implementation of IObservable
const observable = new tx.Observable();
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

*Defined in [IObservable.ts:105](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L105)*

Pipes a series of operations per item in the stream. All operators must be inside a pipe.

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

// Observer is an implementation of IObservable
const observable = new tx.Observable();
observable
	.pipe(
		map(x => x * 2),
		filter(x => x > 5)
	)
	.subscribe(new tx.Observer(console.log));
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

*Defined in [IObservable.ts:29](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L29)*

Subscribes an `Observer` instance

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

// Observer is an implementation of IObservable
const observable = new tx.Observable();
const observer = new tx.Observer(console.log);
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

*Defined in [IObservable.ts:51](https://github.com/tsaqib/trex/blob/65d6299/src/IObservable.ts#L51)*

Unsubscribes an `Observer` instance

Basic usage example:

```ts
import * as tx from '@tsaqib/trex';
// or CommonJS: const tx = require("@tsaqib/trex");

// Observer is an implementation of IObservable
const observable = new tx.Observable();
const observer = new tx.Observer(console.log);
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

*Defined in [IObserver.ts:13](https://github.com/tsaqib/trex/blob/65d6299/src/IObserver.ts#L13)*

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

*Defined in [IObserver.ts:21](https://github.com/tsaqib/trex/blob/65d6299/src/IObserver.ts#L21)*

The error handler for the potential exception occured inside the `next` function.

**`memberof`** IObserver

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`err` | any | The error object. |

**Returns:** *void*
