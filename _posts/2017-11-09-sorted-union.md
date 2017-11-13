
---
layout: post
title: sorted Union
date: 2017-11-09
---

### sorted Union
This exercises was challenging but not that much , and i went the sorted union to figure out to 
know more about it so that i will solve.



### Instructions:
I should write a function that takes two or more arrays and returns a new array of unique  values in the order of the
original provided array. In other words , all the values present from al arrays shoulsd be included in their  original provided 
array. The unique number should be sorted  by their original order but final array should not be sorted in numeric order.


### Solution: 
Firstly , I created a for loop so that the values will be exercuted and it waas returning the wholearray instead
of returning unique values. After i have seen that one for loop is not working ,  i decided to have another for loop  to compare both 
array so that it will exeercute an accurate results. On my test statement i was testing both arrays using includes method to 
 see that an array includes a certain element, if it does then push arguments in a new array called uniqueValues.  And it returned 
new  array of unique values. This has almost the same semantics as the above, except that it uses the SameValueZero comparison algorithm
instead of Strict Equality Comparison.


### problem started:
When i  consoled the function to whether it will return the corrrect  results but it returned 1,2 ,3,5 and undefined instead
of 1,3,2,5,4. I reviewed my code taking one step at a time to what caused my function to return to return values
and undefined. I found that instead of comparing both for loop i was using one for loop.  But finnaly it was working 
and returning what it was supossse to return.



The past weeks ago, I went through includes methods to how it works and i'm very xercited because i used it 
and i love the fact that it was working and the way i wanted it to work.  It makes things to be much easier
even though the exercise was was chalenging.



`
