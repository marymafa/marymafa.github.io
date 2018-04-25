---
layout: post
title: ComponentWillReceiveProp And ComponentWillUpdate
date: 2018-04-23
---


### componentWillReceiveProps(nextProps)

componentWillReceiveProps will be called in each update life-cycle caused by changes to props (parent component re-rendering) and will be passed an object map of all the props passed, no matter if the prop value has changed or not since previous re-render phase. componentWillReceiveProps is ideal if you have a component whose parts of the state are depending on props passed from parent component as calling this. setState componentWillReceiveProps called with all props, even those that did not change it is expected the developers implement a check to determine if the actual value has changed.

 for example:

componentWillReceiveProps(nextProps) {
  if(nextProps.myProp !== this.props.myProps) {
    // nextProps.myProp has a different value than our current prop
    // so we can perform some calculations based on the new value
  }
}



###  componentWillUpdate(nextProps, nextState)

If the shouldComponentUpdate function is not implemented, or it decided that the component should update in the render cycle, another life-cycle function will be called. Component will update is commonly used to perform state and props synchronization for when parts of your State are based on props. In cases where shouldComponentUpdate is implemented, Component will update can be used instead of componentWillReceiveProps as it will be called only when the component will actually be re-rendered.


































33333
