
---
layout: post
titlt: Game Of Life
date: 2018-06-08
---

### Game Of Life

I did the research on the game of life and I found that game of life is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced players, by creating patterns with particular properties.

On FreecodeCamp I was asked to build a game of life following the user's stories and rules. Like a dead with three alive neighbors lives for the next generation, a live cell with more than three neighbors will be dead in the next generation and a live cell or dead cell with less than two alive neighbors will be dead in the next generation.

### user Stories

1. the user can clear up the board and set up the board

2. when the user presses the  random button then the cells wills display randomly and pick

3. The user can be able to start, stop and clear the board


### My Approach

step1

Firstly I created a function called make grid that will generate the board the returns dead cells only and I call it the initial board

and here are some of the pieces of code


function makeGrid() {
    var grid = [];
    for (var x = 0; x < 20; x++) {
        for (var y = 0; y < 20; y++) {
            grid.push(
                {
                    x: x,
                    y: y,
                    status: "dead"
                }
            )

        }
    }
    return grid;
}


step2 

These part allow the user to set dead cells to alive cells also it will set the alive cells to dead cells. and it was not challenging and I did spend a lot of hours or minutes, for me it was easy and simple.

    setUpCells(element) {
        var newGrid = this.state.aliveCells;
        if (element.status === "Alive") {
            element.status = "dead"
            newGrid.push(element);
        } else if (element.status === "dead") {
            element.status = "Alive"
            newGrid.push(element)
        }
        this.setState({
            aliveCells: newGrid,
        })
        return newGrid
    }

step 3 

I have created a function for random cells, like whenever the user arrives at the game it will randomly generate the board and start playing and in the random function I each x and y-axis has its own math.floor. I have a function that that will allow the user to see how many generations have gone by each time the board changes.
I have learned a lot of things that I didn't know and I like the fact that I was challenging in a good way and I really enjoyed and this is the project that I enjoyed while coding even though it was difficult .

