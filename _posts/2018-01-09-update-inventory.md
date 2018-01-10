
---
layout: post
title: Inventory update
date: 2018-01-09
---

### Inventory update

Algorith challenge

Last time i did this challenge and it was not working , I went back trying to understand the problem then after i wrote code explanation so that that i can see where the problem is and i found that i didn't create a removen fuction, sort function because of misunderstainding.

In this challenge i were suppose to compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

code explanation:

1. create a function that will merge array one and array two into a single unit.

2. create another remove function that will remove the element if is repeating .

3. create another function that will will compare both array if there are the same element the n add the element and also remove the element asfter adding it.

4. the returned inventory array shpould be in alphabetical order by  item.

### My Approach

I created a function titled  merging two array that will merge array one and last array into a  single unit and should return new array of merged elements. I created another fuction that will remove the element that is repeating after add the element of array one and array two . After seen than my code is working i decided to create another  function that will update the inventory and inside my function i used for loop  and for each function. On my test  statement i compared both array and i said if element in array one is same as the element in array two then don,t add the element but add their number , if there are not the same then push those element to array 1. I tested my code and i found that it's working but the returned inventory array is not inoder then i decide to use a sort function  to sort the element in aa array alphabetically. Finallty, its working .

On this algorith challenge i have learned that it's very important to understand the problem first then after write code explanation to see what is needed and how are going to solve it.



