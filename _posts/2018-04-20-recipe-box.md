
---
layout: post
title: Recipe Box
date: 2018-04-20
---

### Recipe Box

On FreeCodeCamp was asked to build a recipe box following FreecodeCamp's example. The recipe box is a set of instructions and recipe name that describes how to prepare or make something, especially a culinary dish. was following the user's stories, for example, the user can click into any of those recipes to view it,  can edit the recipes, can delete the recipes, All new recipes the user can add and will be saved in the browser's local storage. If the user refreshes the page, those recipes will still be there.

### code explanation

1. Create a form that contains the recipe name and ingredients where the user can then enter the recipe name and ingredients separated by commas,

2. Edit button should allow the user to edit the ingredients and save whenever the user clicks it.

3. Delete button should allow the user to delete any recipe.

4. Add button should allow the user to add any recipe name and ingredients.

### approach


I have a file called  index.js, And it is used to manage everything and takes care of updating the dom to match the react documents. I created a class called recipe box inside I implemented the constructor for a react component subclass,  and I called supper (properties) before any other statement, otherwise, this .props will be undefined in the constructor which can be lead to bugs. I have this. state where will store the recipe name and ingredients.

 this.state = {
            data: [
                {
                    recipeName: "cake",
                    ingredients: "flower, baking powder, butter, milk, vanila"
                }
            ]
        }

I have a function called add data that is passed through two parameters called recipe name and ingredients. its purpose is to push the recipe name and ingredients to the current recipe and I have a local storage where items or recipes will be set from the state to local storage. I used ComponentDidMount to et data from the local storage and display it to the browser whenever the items are passed.

componentWillMount() {
        var parsedItems = JSON.parse(localStorage.getItem('OBJ'));
        if (parsedItems) {
            this.setState(
                {
                    data: parsedItems
                }
            )
        }
    }







