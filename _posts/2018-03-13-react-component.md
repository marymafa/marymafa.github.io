
---
layout: post
title: React COmponent
date: 2018-03-13
---

### Component

Components are the heart and soul of React.

### TYpes of components

1. A Simple Component

React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

2. A Stateful Component

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().React.createClass is not the only possible way to create valid React component. With ES6 (which is really cool), we can use classes to create React components. This means that instead of object as argument with properties, we use class members to define behavior:



