

---
layout: post
title: Smallest Commmon Multiple
date: 2017-11-16
----

### Smallest Commmon Multiple

I were suppose to Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

### Common Multiple

 common multiples are those that are found in both lists. For example the common multiple of three and four is 0,12,14.


### My Approach

method 1

I have decided to create a function called is smallCommons that contains variables called lowest where can store the first index,  the second variable called called highest where can store the last index, and the third variable is called sortedList where can sort numbers in an array numerically starting from the lowest to the highest, and the fourth called currentMultiple where the highest is equal to the currentMultiple in the begining and my last variable is called range.

 Method 2

As i were given only lowest and highest  values, i decided to  create a for loop where the initial is equal to the lowest and the highest as the final expression  like if the statement is true the statement is executed. So i wanted to find the unknown values between the lowest value and the highest values and then after finding unknown values, push the values to the new variable called range. 

 method 3 

I created another function called isCommonMultiple that contains three parameter which is range, curenMultiple and highest. On a for loop the initial is zero  and the range is the final expression  and on the test condition i said if currentMultiple divided by range  is not equal to zero  or the remander is not zero the return false, otherwise return true.

 Method 4

I went back to my first function and create a while loop , where i said while is not isCommonMultiple keep on testing but if you find the one that leaves a reminder like 1  then break, after breaking add the currentMultiple with the highest value then keep on doing that until you find the smallest common multiple that will suit all the values in an array or range.


I tested all the test and finally it returned the smallest common multiple which is 60.
