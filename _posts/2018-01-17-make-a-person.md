
---
layout: post
title: Make a person
date: 2017-01-17
---

### Make a  person

Algorithim challenge

I were suppose to fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

And run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. The methods must be the only available means of interacting with the object.

Code Explanation:

1. Create a variable that will make a copy of the full name that was passed as a parameter.

2. Then we can proceed to create the six methods needed and return what is asked for.

3. For the individual setters, we can use the split to turn the fullname into an array 

### My approach

I have a function that passes through one parameter called first and last and ecercuting the function it will return the fullname of that person. I use this to allows  all the generic initializations in one constructor and have specializations in others.

I created another variable named  fullname that will make a copy of the full name that  was passed as a parameter.And the first function is used to separete the full name of the person so that you can see this is the first name and last name. the second and third function will show that after splitted fullname then the first name will be index zero(0),where index zero is the starting  point and the last name will be  index one(1).

I created another function that will join the first name and the last name, then when consologing it will return the joined fullname. I also have the lasts two function that like when getting the first name it will return the first index which is the name of the person and when getting the last name it will reeturn the last index which is the last name of the person.

I have the last variable that will  that have the name that will equal to or same as the new person which id the full name of the person.

Finally, this challenge didn't challenge  me like the previous one and i did enjoy it  and  i spent more than  30 minutes  but less than an hour trying to understand  the problem and how am i going to solve it like i wrote code explanation so that it will be much easier for me.


This is my code

var Person = function (firstAndLast) {
    var fullname;

    this.setFullName = (full) => {
        fullname = full.split('');
    };
    this.setFirstName = (first) => {
        fullname[0] = first;
    };
    this.setLastName = (last) => {
        fullname[1] = last;
    };

    this.setFullName(firstAndLast);

    this.getFullName = () => fullname.join('');

    this.getFirstName = () => first[0];

    this.getLastName = () => Last[1];
};

var bob = new Person('Bob Ross');

bob.getFullName();

console.log(bob.getFullName());


