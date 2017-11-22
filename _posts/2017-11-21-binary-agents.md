
---
layout: post
title: Binary agents
date: 2017-11-21
---

### Binary agent

I were suppose to Return an English translated sentence of the passed binary string.  The binary string will be space separated.

The explanation on this problem is fairly straight forward, We need to take our binary numbers, which are in a string and convert them into their relevant ASCII or alphabet characters


### Code Explanation:

1. Separate the string into an array of strings separated by whitespace.

2. Create some variables that will be needed along the way, the names are self explanatory for the most part.

3. Iterate through each binary string in the new array.

4. Convert to decimal by using parseInt(binary, 2) (with the second parameter we tell in which base our numbers currently are)
    At the end, we return out converted message.

5. First we use split() to be able to work on each character as an Array element.

### Approach

There’s actually two steps involved in converting binary to ASCII, first we have to convert them into utf-16 binary where 01000001 would be 65, from here, we then convert utf-16 binary to readable English charaters.

First step is to split our argument into an array. Our argument is a string, but we need it to be an array which we split whenever there is a spaced. I this by using the argument (' ') with our split() function. This tells the function that whenever you see a space in the string, that’s where I want you to split the string and start a new array element. I used string.fromCharCode which will create a string of characters when you pass it an argument. My argument will be my  newArray with its postion newArray[i] which we created and pushed to in the previous line.

i  used parseInt(split[i], 2)  and give it my item (argument 1 of parseInt) and tell it to convert using the mathematical base of 2.  but briefly there are binary, decimal where the number 13 would display differently, binary displaying it as 1's and 0’s for example. 

Finally, it returned an accurate results and the results were spaced and i used join to join them together.






S

