
---
layout: post
title: No repeats please
date: 2018-01-16
---

### No Repeats Please

Algorithm Challenge

Last time i did this challenge and it was not working , I went back trying to understand the problem and  see where the problem is. I found that on my while loop i didn't  use an if statement correctly and also i didn't match the letters to see which one is repeating. 

In this challenge I were suppose to return the number of total permutations of the provided string that don't have repeated consecutive letters.  and to assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Code explanation 

1. regex contains the regular expression to match repeated consecutive characters.

2. The filtered variable filters permutations to include only non-repeated permutations.

3. filtered.length returns the number of total permutations of the provided string that don’t have repeated consecutive letters.

My Approach

I have a function titled permAlone(permutation alone) that passes through two parameters called  a(which is array of any) and n( which is an interger that is equal to the lenght of array).  I created another variable called results that will store all the permutaions. 

I created a for loop for each permutation , append the current letter . I said variable c is equal to zero(0). On My while loop i said index i is  less than integer(n) , and   if index i is divisible by two and leaves a reminder zero(0) then switch the ith element and the last one . If is odd switch the first element and the last one. 

I used  filter  that creates a new array called permutations with all elements that pass the test implemented by the provided function and should return letters that doesn't match other characters.

In this algorithm challenge i have learned that it is important to ask when you stuck to avoid spending more hours trying to  figure  it out and  also i like the experience i got from this challenge.


This is my working code

function permAlone(a, n = a.length) {
 
    var results = [];
    var c = [];

    for (var i = 0; i < n; i++) {
        c[i] = 0;
    }
    results.push(a);
     i = 0;
    while (i < n) {
        if (c[i] < i) {
            if (i % 2 === 0) {
                var splitted = a.split('');
                var temp0 = splitted[0];
                var tempi = splitted[i];
                splitted[0] = tempi;
                splitted[i] = temp0;
                a = splitted.join('');

            } else {
                var splitt = a.split('');
                var temp1 = splitt[c[i]];
                var tempx = splitt[i];
                splitt[c[i]] = tempx;
                splitt[i] = temp1;
                a = splitt.join('');
            }
            results.push(a);
            c[i] += 1;
            i = 0;
        } else {
            c[i] = 0;
            i += 1;
        }
    }
        var permutation = results.filter(function(letters){
     return !letters.match(/(.)\1+/g);
  });
                                       
                                        
return permutation.length;
}
permAlone('aab');
