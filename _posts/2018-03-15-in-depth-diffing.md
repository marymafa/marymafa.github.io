
---
layout: post
title: In-depth Diffing
date: 2018-03-15

### In-depth Diffing

In the update stage of a component, React has to determine which child components to mount, update, and unmount. However, components would lose their state and performance would suffer from recreating the same DOM every time. Instead, React keeps the output of the previous render call and compares it with the new output to decide what to do. This comparison is called reconciliation.

### Reconciliation

React provides a declarative API so that you don’t have to worry about exactly what changes on every update. This makes writing applications a lot easier, but it might not be obvious how this is implemented within React. This article explains the choices we made in React’s “diffing” algorithm so that component updates are predictable while being fast enough for high-performance apps.

### Recursing On Children

By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.


### The process

The heart of the reconciler lives in ReactChildReconciler.updateChildren. Let's walk through the code. Follow the source here.

1. React iterates through the new set of children (nextChildren).

2. For each child, React checks whether there is an old child (prevChildren) that has the same key as the new child. If an explicit key is not provided, React uses its position. [getComponentKey source].

3. If there is no new child with the same key as an old child, the old child is unmounted.

4. If there is no old child with the same key as a new child, the new child is mounted.

5. If there is an old and new child with the same key, we use shouldUpdateReactComponent to decide whether we should update the instance vs doing a clean unmount/mount. [source]

If React decides to update a child instance, React will then call render on the instance and again reconcile the output and its children. In the other case where an instance is unmounted and a new one is mounted, there is no further reconciling or DOM updates.
