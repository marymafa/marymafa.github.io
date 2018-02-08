
--- 
layout : post 
title: Reduce function and recursive
date: 2018-01-12
---

### Reduce

If you can use the reduce function to spit out an average then you can use it any way you want.

For example, you could double the total, or half each number before adding them together, or use an if statement inside the reducer to only add numbers that are greater than 10. My point is that the Reduce Method In JavaScript​ gives you a mini CodePen where you can write whatever logic you want. It will repeat the logic for each amount in the array and then return a single value.

### Finding an Average with the Reduce Method In JavaScript​: 

Instead of logging the sum, you could divide the sum by the length of the array before you return a final value. The way to do this is by taking advantage of the other arguments in the reduce method.   The first of those arguments is the index.  Much like a for-loop, the index refers to the number of times the reducer has looped over the array.
