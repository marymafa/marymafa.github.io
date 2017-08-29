--- 
layout: post
title: "Make object properties Private".
date: 2017-08-29
---
 
### Make object properties Private

-Objects have their own attributes, called properties, and their own functions, called methods.


-We can also create private properties and private methods, which aren't accessible from outside the object.


-To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead of creating it as a property of this.


-This is useful for when we need to store information about an object but we want to control how it is used by outside code.


-For example, what if we want to store the speed our car is traveling at but we only want outside code to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way.


