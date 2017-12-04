
---
layout: post
title: Symmetric Difference
date: 2017-12-04
---

### Algorithm Challenge:

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

### What is Symmetric Difference all about?



### Code Explanation:

1. Merge both arrays on the new one using .concat().

2. Create a callback function to use with filter. The function will check if the number is not present in both original arrays and return it.

3. Return the filtered array.

### My Approach

I created a function title sym that passing throgh two parametrs which are array one and array two.  I also created a variable called new array that will return new array after merging array one and array two.


