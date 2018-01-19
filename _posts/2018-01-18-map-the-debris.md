
--- 
layout: post
title: Map the Debris
date: 2018-01-18
---

### Algorith Challenge

Map the Debris

In this challenge i were suppose to return a new array that transforms the element's average altitude into their orbital periods. The array will contain objects in the format {name: 'name', avgAlt: avgAlt}. The values should be rounded to the nearest whole number. The body being orbited is Earth. The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

### Code Explanation:

1. GM and earthRadius are both given to us.

2. A for..in loop is used to iterate through each value in given array arr.

3. OrbitalPeriod holds the value of orbital period for each iteration calculated using the formula.

4. Use  to return the base to tthe exponent power.

%. Use math.round to round a number to the nearest integer.

6. Use math.pi to represents the ration of the circumference.

### My A prroach

I have a function titled average that passed though a parameter called average altitudes that holds the elements.  I created many variables  that will store  data and the first one is called gravititional mass(GM) value of earth  which is 398600.4418 km3s-2, the second one is the radius of the earth which  is 6367.4447 kilometers , i aslo have variable named array(arr) that  will return  a new array that transforms the element's average altitude into their orbital periods and the last one is power that will return the base to the exponent power.


I said variable i equal to zero because zero is the starting point, and i used a for loop for each element to iterate though it. Inside the for loop i created a variable called AVGALT(average altitudes) that stores the averagealtitudes , also have  a variable called a (which  is the orbit's semi-major axis in meters) that will add the earth  radius  with the average altitude.  I have a variable called orbital Period that holds the value of orbital period for each iteration calculated using the formula and after will  push average altitudes,orbitated into an array and it will return a  array that transforms the element's average altitude into their orbital periods.
 
Finally, i calculated the value  of orbital period first and it returned an accurate results and lastly i created an array that transforms the element's average altitude into their orbital periods and returns an array with the names and the orbital periods.

The is my piece of code:

var i = 0;
    for (var i in averageAltitudes) {
        //console.log(averageAltitudes[i].name);

        var avgAlt = averageAltitudes[i].avgAlt;
        var a = earthRadius + avgAlt;
        var cube = a * a * a;
        var orbitalPeriod = (Math.PI * 2) * Math.sqrt(cube / GM);
        arr.push({ name: averageAltitudes[i].name, orbitalPeriod: Math.round(orbitalPeriod) })
    }

    return arr;


