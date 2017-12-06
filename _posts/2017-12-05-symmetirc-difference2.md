
---
layout: post
title: symmetric difference2
date: 2017-12-05
---

### Algorithm Challenge:

I want to continue with this challenge because i didn’t finish it like it was really challenging but atleast now i got the solution.  I were asked to Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays. Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term “symmetric difference” of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

### Code explanation: 

1. create a for loop to iterate over each of the item.

2. create the second function to find the symmetric difference.

3. Use foreEach

4. the function should return  the stmmetirc difference for the arguments.


### My Approach:
 	Method 1

I created a function titled sym that contain a variable called args(arguments) and after iterating over each arguments then push them to a variable called args.

	Method 2

I created another function titled symdiff that will find the difference that passing through the parameters named array one and array two.  I also created another variable called results that will store data.  On forEach method i'm compiring two array like if there is no unique items and the idea is that each number only gets added to the results array once, as long as it isn’t present within both input arrays. And the second foreEAch statement i also compared two arrays like if there is no repeating  items and the idea is that each number only gets added to the results array once, as long as it isn’t present within both input arrays return the results. For another return  it is used to pass in the symDiff function and apply the reduce method to the args array, this will apply the symDiff function to every array and compare it to the previous value (an ever increasing array of symmetric difference values).


Finally , it is working and it returns the symmetric difference for multiple array for example([1, 2, 5], [2, 3, 5], [3, 4, 5] will return [1,4,5]).
