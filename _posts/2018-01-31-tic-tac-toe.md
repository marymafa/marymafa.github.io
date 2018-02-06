
---
layout: post
title: Tic Tac Toe
date: 2018-01-31
---

### Tic Tac Toe Game

Last , was busy with javascript and i didn't dfinish it. I following the user stories to finish this project. 

User stories

1 .As a user i can play a game of Tic Tac Toe with the computer.

2. As i uaer i can can choose whether I want to play as X or O and reset as soon as it's over so I can play again.

### My Approach

I created a function titled click  and i used this dot id to return an empty string. On my test statement i said if cell is empty then the user should choose player choice and the remaining  player  choice will be for  copmputer choice. Each cell have it's own staement .
function click() {
    if (this.id == "cell1") {
        document.getElementById("cell1").innerHTML = playchoice;
      document.getElementById("cell2").innerHTML = computerplayer;
    } 

I used document dot get element by id to return the element that has the ID attribute with the specified value and when the user clicks the click function it will  get the element by the specified id.

document.getElementById("cell1").onclick = click;
document.getElementById("cell2").onclick = click;

I created a reset function to reload the resource from the current URL. Its optional unique parameter is a Boolean, which, when it is true, causes the page to always be reloaded from the server.

       function reset() {
            window.location.reload(true);
        };
   



