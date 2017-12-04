
---
layout: post
title: Symmetric Difference
date: 2017-12-04
---

### Algorithm Challenge:

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

### What is Symmetric Difference all about?

Is the set of elements which are in either of the two or more sets.

### Code Explanation:

1. Merge both arrays on the new one using .concat().

2. Create a callback function to use with filter. The function will check if the number is not present in both original array and return it.

3. Return the filtered array.

### My Approach

Method 1

I created a function title sym(for symmetric) that passing throgh two parametrs which are array one and array two.  I also created a variable called new array that will return new array after merging array one and array two. 

Method 2

I created another function titled check that will check  the difference of two or more sets. On my if statement i said if array one of index which is item does not exist  return that item or if array 2 of  index which is item  does not exist then return that item , Otherwise return new array for the elements that has passed the test.

### Challenge:

Problem started when it returns the results for two array because inside my first function i have only two parameters titled array one and array two but i tried to change the those parameters but still there is no changes. I went back to the instruction to understand the problem  and i did fix my code but still it return 
results for two arrays only. Because of time will figure it out tommorow and will also post my solution.

Even though it was challenging but atleast i have some green ticks that realy shows that i have some knowdlege of what going  on.


