
---
layout: post
title: Validation
date: 2017-11-28
---

### Telephone check

### My Approach

			Method 1



			Method 2

I  have the area code, but before it, I may get a space -sometimes-, so 
i want to  use the ? symbol with a preceeding space:Now, onto the area code, it can show up with two different shapes: 555 or (555), i am  are going to use a capturing group -using the parenthesis symbols- and the OR operator -the | symbol- in conjunction. This way, i  can match either one or the other option like so: (555|(555)).

			Method 3

It’s actually not that simple, I’ll need to match any number and also escape the parenthesis symbols for (555), or the engine will get confused between the capturing group parenthesis symbols and the ones that we want to match in the string. To escape a character, I simply place a backslash ( \ ) in front of it.

			Method 4

To match any digit, I can use this token: \d. If i place three of this in succession (\d\d\d) it will match any 3 digits in a row. i can also use this notation: \d{3}. This means that the previous token will repeat 3 times. i want to use this knowledge and implement it into my regular expression.
It may seem quite confusing, but (\d{3}|\(\d{3}\)) just means: three digits in a row or opening parenthesis, three digits and closing parenthesis.

I only have the actual phone number left, but we need to account for the possibility of a space or dash (-) character between the area code and phone number first. We will use a range by using the square brackets ([ and ]) for this.
