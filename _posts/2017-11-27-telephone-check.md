
---
layout: post
title: Telephone check
date: 2017-11-27
---

### Telephone check

In this challenge,  my job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, i must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. The user may fill out the form field any way they choose as long as it is a valid US number.


### Code Explanation:

1.  I should use (1) checks allows for a “1” or a "1 " at the beginning.



2.  I should use\d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3})checks for three digits that are allowed to be between parenthesis.


3.  I should use[\s\-]? checks for spaces or dashes between the groups of digits.


4. I should use $ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 a”).


5.  Lastly, I should  use regex.test(str) to test if the string adheres to the regular expression and return true or false.

6.  Use a for loop if possible.


### My Approach

I created a function titled telephone check to check whether it is valid or not,  a variable named format that will cointain the formal that will be needed, And  a for loop  that will iterate though the an argument. On my test stattement i said if numbers is not equall to a formal return false otherwise return true. It worked for false only instead of working for true and false.

