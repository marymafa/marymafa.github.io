
---
layout: post
title: Simon game
date: 2018-02-14
---

### Simon game

this is the most challenging  game, and i love the fact that i'm learning and i can alo see where the problem.

### User Stories:

As a user, I am presented with a random series of button presses.

As a user, each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

As a user, I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

As a user, if I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

As a user, I can see how many steps are in the current series of button presses.

As a user, if I want to restart, I can hit a button to do so, and the game will return to a single step.

As a user, I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

As a user, the tempo of the game speeds up incrementally on the 5th, 9th and 13th stepAs a user, I can win the game by getting a series of 20 steps correct.


### Javascript

I have a variable called display that is equal to setInterval and inside it, i have another variable called a random color which represents colors and i used a math dot random to return a random number between zero and one , i used a math.floor to return the largest integer less than or equal to a given numbera nd i multiplied it by the length of the colors. I used document do t get elemt by id which is  rndom color and its class name which is buttons dark addin with random color. I have a  set time out function that will call  a function or evaluates an expression after a specified number of milliseconds.

### This is may piece of code:

 function changeColor() {
            players();
            var i = 0;

            var display = setInterval(function flash() {
                var randomColor = colors[Math.floor(Math.random() * 4)];
                possibleColors.push(randomColor);
                document.getElementById('count').innerHTML = possibleColors.length;

                console.log('the random color is', randomColor);

                document.getElementById(randomColor).className = "buttons dark" + randomColor;

                setTimeout(function () {
                    document.getElementById(randomColor).className = "buttons light" + randomColor;
                    document.getElementById('count').innerHTML = possibleColors.length;
                }, 800);


                if (i == possibleColors.length - 1) {
                    clearInterval(display);
                    i = 0;
                }
                else {
                    i++;
                }
            }, 1000);

        }

