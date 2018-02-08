---
layout: post
title: Arrow function
date: 2017-10-11
---

Benefis of arrow function:

*They have a concise syntax.

*They have implicit returns .

*They don't rebind the value  of this when you use a arrow function inside of another function.

Example of arrow function:

const fullNames=names.map(function(name) {
return `${name} Box`; 
 
Turn iy into an arrow function:

const fullNames2=names.map((name)=>{
return `${name} Bos`;
}):

console.log(fullNames);



