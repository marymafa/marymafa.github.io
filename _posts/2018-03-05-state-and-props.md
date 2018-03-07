

---
layout: post
title: State and props
date: 2018-03-05
---

### State and properties

State like React props are used to store data in React. A difference between state and props is that while the data stored by props are fixed throughout their lifetime, state store data that can be changed overtime. This change can be in response to user actions, network responses or anything. Also, while props are set by the parent component, state is changed internally by the component .You can set a component's default state, access the current state and update this state.

### Changing a Component's State


To change a component's state, you call a function this.setState(). This.setState() takes two arguments, an object and a callback. 

### this is a piece of code forSetting a Component's Initial State 

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "Human Friend", 
      message : "You are welcome to our World"
    }
  }

The above is the syntax for doing setting a component's default state. The constructor method is a special method for creating and initializing an object created with a class. In any class, there can only be one constructor method. super allows you to call the constructor method of the parent class. You need to include props to have access to this.props inside of your constructor. In React, super should be present in a constructor method.


State is the heart of every react component. It determines how components renders and behave.
