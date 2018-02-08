
---
layout: post
title: Check truth
date: 2017-11-22
---

### Check truth

In this challenge i were suppose to  check that if  the predicate (second argument) is truthy on all elements of a collection (first argument). For example:

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

The key to understanding this challenge is understanding that you need to write some code which detects falsy values. The Falsy values in JavaScript are false. for example
0 (zero),  “” (empty string), null, defined and NaN.

### Logic

So at each object in my collection array , i need to check if it contains the  second argument pre. Thats why on my if statement i said if collection is not predicate then return false. I said if pre isn’t in one of the collections objects, then  do something. Effectively the code says if collection at i position returns false meaning [pre] was not found, do something until it break

### My Approach

I obviously needed to test all the objects in the array, so i created a for loop to iterate over each of the objects.  I used an if statement to see whether any of the filtered objects are equal to the falsy values i identified earlier. If they are, i need to terminate the loop and return false.  However, if the loop completes, the values are obviously all “truthy”, and we should return true.

Finally, It was working like firstly it returned  false when the collection pre was not found then i said  it should keep  on doing something until is true then break.




