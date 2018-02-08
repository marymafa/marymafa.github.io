
---
layout: post
title: Javascript Calculator
date: 2018-01-22
---

### Javascript Calculator

In this project I were suppose  to build a javascript calculator that wil allow  users to add, subtract, multiply and divide two numbers. If a user  click  an a clear button ,it is  clear the input field with a clear button and t user  can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

### code explanation

1. Have an html page to create each button.

2. Create a button for values and operators and also should be clikable.

3. I should have an html page to create each button. 

4 Use css to style  my calculator because it needs creativity in design.

5. Use javascript  to write functions for every button but that seemed redundant so I found a better way with the button value attribute by passing the object into a function onclick and then retrieving the value of the button before adding it to the screenOutput string.

### My approach

For one day i managed to  create the buttons that will appear on my calculator, Which are numbers and operators and  that provides the user a simple way to trigger an event, like  adding, subtracting, multiplying and dividing two numbers, calcelling and so on. I used div to  divide sections or buttons  in an HTML document so that could be much better like each button has it's own div which is col-md-3 except display button , has it's own div which is col-md-12. and i also created a display sreen that wil display value whenever a user click those buttons  and i also used an css for my calculator to have good shape .  have two classes for rows and display screen.


This is some of my  code :


            <div class="col-md-3"><button value="5" onclick="five()">5</button></div>
            <div class="col-md-3"><button value="6" onclick="six()">6</button></div>
            <div class="col-md-3"><button value="7" onclick="seven()">7</button></div>
            <div class="col-md-3"><button value="8" onclick="eight()">8</button></div>
            <div class="col-md-3"><button value="9" onclick="nine()">9</button></div>
            <div class="col-md-3"><button value="*" onclick="multiply()">*</button></div>
            <div class="col-md-3"><button value="0" onclick="zero()">0</button></div>
            <div class="col-md-3"><button value="." onclick="dot()">.</button></div>
            <div class="col-md-3"><button value="-" onclick="minus()">-</button></div>
            <div class="col-md-3"><button value="c" onclick="cancel()">c</button></div>
            <div class="col-md-3"><button value="=" onclick="equals()">=</button></div>

#row {
            width: 200px;
            background: skyblue;
            margin: 80px auto;
            height: 55%;
            border: 4px solid;
            border-radius: 4px;
        }

        #display {
            background-color: whitesmoke;
            width: 200%;
            margin: 8%;
            border-color: mediumslateblue
              height: 25%;
        }
