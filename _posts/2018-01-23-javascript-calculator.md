
---
layout: post
title: Javascript Calculator
date: 2018-01-23
---

### Javascript Calculator

Last time i did html only so now i want to add javascript so that the screen can dispaly values whenever the user click any button and its also challenging in a good way like i follow the user stories to crearte an a working calculator. 

### code explanation

1. Have an html page to create each button.

2. Create a button for values and operators and also should be clikable.

3. I should have an html page to create each button. 

4 Use css to style  my calculator because it needs creativity in design.

5. Use javascript  to write functions for every button but that seemed redundant so I found a better way with the button value attribute by passing the object into a function onclick and then retrieving the value of the button before adding it to the screenOutput string.

### my aproach

Initially, I thought I’d need to write functions for every button but that seemed redundant so I found a better way with the button value attribute by passing the object into a function onclick . I used get docement by id that will  return the element that has the ID attribute with the specified value and inner html that is used to get or set the HTML content of an element and also it allows reading and replacing everything within a given DOM element (HTML tag). Equals function  is used to add, subtract, multiply and divide two numbers, and return results of those values when ever the the user press the equal sign it will execute the function.

Finally, its working even though i was struggling to  add, subtract, multiply and divide two numbers and return the results of those values. I went back to my function and review all my code to where the problem is and i found that i didn't use get element by id correctly the i did fix it. I have now completed the challenge Build a JavaScript calculator. Initially I tried making a calculator emulating a real calculator, but I gave up and resorted to eval. For the design I tried to imitate the "material" look that is so popular nowadays





This is some of  my of code

function one() {
            document.getElementById("display").innerHTML += "1";
        };

        function two() {
            document.getElementById("display").innerHTML += "2";
        };
        function three() {
            document.getElementById("display").innerHTML += "3";
        };
        function four() {
            document.getElementById("display").innerHTML += "4";
        };
        function five() {
            document.getElementById("display").innerHTML += "5";
        };
       
        function equals() {
            var val = document.getElementById("display").innerHTML;
            var results = eval(val);
            document.getElementById("display").innerHTML = results;
        }


