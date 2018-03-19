
---
layout: post
date: 2018-03-11
---

### Virtual DOM

React uses a concept called the virtual DOM. When you write <div>, you are not immediately creating a div. Instead, you are working with the virtual DOM, a representation of the actual DOM. 
I like to think of virtual DOM components as markers; they tell React what should be rendered. It is then the React engine's job to make sure the actual DOM matches the given markers.

JavaScript is fast. DOM is slow.

React is driven by the idea that JavaScript is fast but working with the DOM is slow. Creating and modifying virtual DOM components is fast.
 Querying a div's computedStyle is slow. When you mutate or query the DOM, the browser needs to reflow and redraw, which are very expensive relative to non-DOM operations, like instantiating a JavaScript class.
