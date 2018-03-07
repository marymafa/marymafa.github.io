
---
layout: post
title: Immutable and Mutable
date: 2018-03-07
---

### Immutable

Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.With immutable data, certain kinds of features that are hard, or even impossible with mutable data, become trivial to implement. One example of such feature is app-wide undo. If your application state can be represented with an immutable value, implementing undo is a matter of keeping a list of versions of the application state, and providing a button to reset the application state to the previous version.


### 
A mutable object is an object whose state can be modified after it is created. Mutable data is inherently more complex than immutable data, because it entangles state and time. In a mutable data, time is a built-in factor. In fact, accessing the value at two different points in time is likely to give you two different values. Immutable data on the other hand, doesn’t have this feature. If you retrieve the value of an immutable data at two different points in time, it’s guaranteed that you’ll obtain the same value.

### conclusion

In Javascript, we have both immutable and mutable data structures that make this language both more flexible and frustrating.
