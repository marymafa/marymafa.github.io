
---
layout: post
title:Destructuring 
date: 2018-04-18
---

### Destructuring 

Is a  convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment).

Assignment Destructuring allows for easy binding of the same properties to as many variables as desired. It also works in both arrays and objects, further expanding its scope. It makes pulling out specific properties from different objects an easy task and also allows for aliasing of properties too.

### Destructuring returned objects

Destructuring is also useful for extracting data from objects that are returned by functions or methods. For example, the iterator method next() returns an object with two properties, done and value. 

Destructuring is used in line A.

const arr = ['a', 'b'];
const iter = arr[Symbol.iterator]();
while (true) {
    const {done,value} = iter.next(); // (A)
    if (done) break;
    console.log(value);
}

 Array Destructuring

Array Destructuring is fairly similar to Object Destructuring but uses array literal syntax instead of object literal syntax. Whereas Object Destructuring uses named keys to extract values, Array Destructuring uses positions within an array to achieve the same thing. The following example demonstrates Array Destructuring to extract a list of colours.

const colours = ["red", "blue", "green"]

const [first, second, third] = colours

console.log(first)
console.log(second)
console.log(third)

---

red
blue
green
