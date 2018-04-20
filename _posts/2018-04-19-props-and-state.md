
---
layout: post
title: Props and State
date: 2018-04-19
---

### Props and State

Search Results
Both state and props in react are used to control data into a component, generally props are set by parent and passed to child components and they are fixed throughout the component. ... Basically, props and state are two ways the component can know what and how to render.

### Props

Props are short for Properties. The simple rule of thumb is props should not be changed. In the programming world we call it “Immutable” or in simple english “Unchangeable”.

Props are Unchangeable — Immutable

Components receive props from their parent. These props should not be modified inside the component. In React and React Native the data flows in one direction , From the parent to the child.

You can write your own components that use props. The idea behind props is that you can make a single component that is used in many different places in your app. The parent that is calling the component can set the properties, which could be different in each place.

### State

State works differently when compared to props. State is internal to a component, while props are passed to a component.

State can Change — Mutable

In english the ‘state of a being’ refers to the physical condition of a person, and it is a mere state, which changes over time. Well, similarly state in React/React Native is used within components to keep track of information.

So when can state be used?

Anytime there is data that is going to change within a component, state can be used.

User interaction with components are good examples of how state works. Clicking buttons, checkboxes, filling forms, etc. are examples of user interaction where state can be used within the component.

If you had to fill a form with text inputs, each field in the form will retain it’s state based on the user input. If the user input changes, the state of the text inputs will change, causing a re-rendering of the component and all of it’s child components.
