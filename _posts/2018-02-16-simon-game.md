
---
layout: post
title: Simon game
date: 2018-02-16
---

### Simon game

I wanna continue with simon game and i didn't finish it because of the time.  I went through the user's stories again and added some code , Like if the user I presses the wrong button, tje user can be notified that  have done so, and that series of button presses starts again to remind the user of the pattern so the user can try again and also the user  can see how many steps are in the current series of button presses.


Javascript

I created a variable called a player inside chageColors function  that  wil store user's input . and i created afunction title players that passes through one parameter called id which is the id of the user.  this function will push the id to a variable called player. On the test statement ai said if possible colors dot lenght and player dot length doesn't exist the alert a message that says" wrong move and try again" and also if possible colors toString is not equal to player also aleert a mesage that says " wrong move and try again" . I also created a clear function that will remove  the possibleColors and start again.

this is my piece of code:


 function players(id) {
            player.push(id);
            if (possibleColors.length - 1 <= player.length - 1) {
                if (possibleColors.toString() !== player.toString()) {
                    alert("sorry, wrong move!");
                    clear();
                } else {
                    changeColor();
                    player = [];

                }
            }
        }
        function clear() {
            player = [];
        }


