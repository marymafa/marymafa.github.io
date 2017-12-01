---
layout: post
title:
date: 2017-11-30
---

###  Algorithm Challenge

In this challenge i were suppose  to return the factorial of the provided integer.  If the integer is represented with the letter n,  a factorial is the product of all positive integers less than or equal to n.  Factorials are often represented with the shorthand notation n!  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


###  What is factorializing a number all about?

When you factorialize a number, you are multiplying that number by each consecutive number minus one.

If your number is 5, you would have:

5! = 5 * 4 * 3 * 2 * 1



## Code Explanation:

Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. If we do not have this condition, the recursion would go on until the stack space gets consumed,
