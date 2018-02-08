
---
layout:post
title: repeat and includes method
date: 2018-01-15
---

### Repeat method 

Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.


For example:

function myFunction() {
    var str = "Hello world!";
    document.getElementById("demo").innerHTML = str.repeat(2);
}


### Includes method

includes() used as a generic method. includes() method is intentionally generic. It does not require this value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects). The example below illustrates includes() method called on the function's arguments object.
This method returns true if the string contains the characters, and false if not and also  is case sensitive.

For example:

function myFunction() {
    var str = "Hello world, welcome to the universe.";
    var n = str.includes("world", 12);
    document.getElementById("demo").innerHTML = n;
}

