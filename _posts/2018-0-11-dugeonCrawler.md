
---
layout: post
title: Dungeon Crawler Game
date: 2018-06-11
---

### Duneon Crawler Game

I was asked to build a Dungeon Crawler game following User's stories

### My Approach

I have a function named initialzingGrid  where it will return the grid  for  x and y axis that does not have path
and here is some of my code for initializing function.

function initializingGrid() {
    var grid = [];
    for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            grid.push(
                {
                    x: x,
                    y: y,
                    pathway: "false"
                }
            )

        }
    }
    return grid;


I have a variable named creatingPath where a i created my pathways for each x ais abf y axias  and i assumed those pathways to be true. here is some of my code   const creatingpath = [
        { x: 0, y: 0, pathway: "true" },
        { x: 0, y: 1, pathway: "true" },
        { x: 0, y: 4, pathway: "true" },
        { x: 4, y: 3, pathway: "true" },
     
    ]

I created a funcytion named creatinpath that will compare both  x axis and y axias  and replacfe those axis with the path that i hv created
function creatingPath() {
 
for (var i = 0; i < initialGrid.length; i++) {
        for (var j = 0; j < creatingpath.length; j++) {
            if (initialGrid[i].x === creatingpath[j].x && initialGrid[i].y === creatingpath[j].y) {
                initialGrid[i] = creatingpath[j]
            }
        }
    }

    return initialGrid;
}

