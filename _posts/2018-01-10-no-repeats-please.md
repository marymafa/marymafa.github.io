
---
layout: post
title: no repeats please
date:2018-01-10
---

### No repeats please

Problem Explanation

This task requires me  to return the number of total permutations of the provided string that don't have repeated consecutive letters. It is to be assumed that all characters in the provided string are each unique. For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

To achieve that, I have to look at each possible permutation of a string. There are several ways to do that. A common interview question is building a function that collects all permutations of a string. There are several tutorials available on the internet on how to do that.

### Code explanation

1. A new string (or character array) that is being built.

2. A position in your new string that's going to be filled next.

3. An idea of what characters (more specifically positions) from the original string have yet to be used.

### My approach:

This challenge is really changing like i went through  permutation and see how it works.  I created a function title permAlone and inside it a have a variable called unique that is zero(the starting point) and another variable that will store elements in a string.  On My for loop i said each element should be iterated in a for loop and then after push element to the variabled called new array, then it returned['aab','aab','aab']. After i have seen i get  wrong results, I changed my code i created two for loop because i'm comparing many elements. On my test statement i said if string element index is less than the length then add then that element because it might happen that can change their position.



