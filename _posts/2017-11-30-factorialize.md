

---
layout: post
title: factorialize
date: 2017-11-30
---



### Algorithm Challenge

In this challenge i were suppose  to return the factorial of the provided integer.  If the integer is represented with the letter n,  a factorial is the product of all positive integers less than or equal to n.  Factorials are often represented with the shorthand notation n!  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

### What is factorializing a number all about?

When you factorialize a number, you are multiplying that number by each consecutive number minus one.

If your number is 5, you would have:

5! = 5 * 4 * 3 * 2 * 1

### Code Explanation:

Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. If we do not have this condition, the recursion would go on until the stack space gets consumed.

### My Approach

I created a function titled factialized that passes through  one  parameter called number. On my first test stattement i tested whether number(5) is equal to zero then return one meaning that during the first execution of the function i said is five(5) equal to zero or  one(1)  no then keep on doing, On the second execution itested whether is number(4) equal to zero or  one(1) no then return the multiplication between  four(4) and the next result when number is mow (4-1), On my third  execution i tested whether mumber(3) equal to zero or  one(1) no then return the multiplication betwwen three(3) and the next test ressult when number is now(3-1), on my fourth execution i tested whether number(2) equal to zero or  one(1) no then return the multiplication between number(2) and the next result when numberis now 1, on the fifth execution i tested is number(1) equal to zero or  one(1) yes then return one(1) and this is where the recursion stops because there are no more executions.

Understanding recursion recursion refers to a function repeating (calling) itself. In this case i basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is num-1 (which initially translates to 4). The very function is going to run inside itself interesting. And finally i tested all the test and it working  i got it right.
