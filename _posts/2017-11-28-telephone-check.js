---
layout: post
title: telephone check
date: 2017-11-28
---

### Telephone check

### My Approach
### Method 1

/*I want to  continue with this chalenge because i didn't finish  it like it was returning all false insteadd of returning true if is valid and false if is invalid, So I went and look-up on what it is. I’m going to start by creating a variable where the regular expression will be stored, I’ll get to the actual function later. First, i want to  make sure that if we get a country code, it’s equal to 1. To achieve this, I’m going to use the ^ symbol, which matches the beginning of a string. Then, I type in 1, since that’s what i actually want at that position. Since the country code is optional, using the ? symbol after it will match  zero or one of the preceding element for example(varchecker = /^1?/;).*/

### Method 2

I  have the area code, but before it, I may get a space -sometimes-, so 
i want to  use the ? symbol with a preceeding space:Now, onto the area code, it can show up with two different shapes: 555 or (555), i am  are going to use a capturing group -using the parenthesis symbols- and the OR operator -the | symbol- in conjunction. This way, i  can match either one or the other option like so: (555|(555)).
### Method 3

It’s actually not that simple, I’ll need to match any number and also escape the parenthesis symbols for (555), or the engine will get confused between the capturing group parenthesis symbols and the ones that we want to match in the string. To escape a character, I simply place a backslash ( \ ) in front of it.

### Method 4

To match any digit, I can use this token: \d. If i place three of this in succession (\d\d\d) it will match any 3 digits in a row. i can also use this notation: \d{3}. This means that the previous token will repeat 3 times. i want to use this knowledge and implement it into my regular expression. It may seem quite confusing, but (\d{3}|\(\d{3}\)) just means: three digits in a row or opening parenthesis, three digits and closing parenthesis. I only have the actual phone number left, but we need to account for the possibility of a space or dash (-) character between the area code and phone number first. We will use a range by using the square brackets ([ and ]) for this. Since i want these last digits to be the end of the match, we’ll append a dollar sign ($) at the end of the regular expression, it’s the similar to the ^ symbol we placed at the very beginning.

Finally, it worked for both valid and invalid telephone number , even if you test all the test you will get an accuarate results.
