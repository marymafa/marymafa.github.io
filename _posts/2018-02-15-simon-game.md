
layout: post
title: Simon game
date: 2018-02-15
---
Simon Game 

Is a simple game which goal is for user to repeat the pattern showed by the program. With each round a new step is added to the pattern making, the game much more difficult with every round. Additionally, the program should play a different sound for each field that is activated. On top Of that you have to enable user to switch between strict mode, which restarts a game whenever user selects wrong field in a pattern, and normal mode which only repeats the pattern subsequent of the wrong button being pressed. The provided example constituted of 4 different fields with different color for each field and I followed with the same idea. I genuinely did like the design Free Code Camp example so I decided to look at it and then buil my own simon game following  the user stories.

HTML and CSS

As usual, I used Bootstrap for responsiveness of the game, and added my own styles using CSS. Next I create a div for each of the game buttons there are 4 in total and named them accordingly.
Each div has its own class, id and value.I also added a Settings button to activate Bootstrap modal in which buttons for resetting the game are stored.When it comes to CSS I had a problem with showing which of the elements are in a pattern. 


Javascript

The first thing I did was creating an JavaScript  variable called colors that contains those four colors, another variable called possibleColors need an array to store player’s input,and the last variable is
player that will store user's input.


