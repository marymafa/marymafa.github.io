

---
layout: post
title: Campers leaderboard
date: 2018-29-03
---

### Building Campers leaderboard

On freeCodeCamp was asked to build a campers leaderboard, I learnt more about using props to send data between components, life-cycle hooks to load data from the API once the component is created and creating tabs to switch between past 30 days and all time campers.


### Code explanation

1. Table -grid— to display the campers info as a table
2. Alltime and Recent components fetching their respective data and displaying using the table-grid component.


### My approach

I have  a componentDidmout method  where is called once all our children Elements and our Component instances are mounted onto the Native UI and also used an axios  which is  a lightweight HTTP client based on the $http service within Angular.js v1.x and similar to the Fetch API.

Then method returns a value, the promise returned by then gets resolved with the returned value as its value and also catch will throws an error, the promise returned by then gets rejected with the thrown error as its value.Alltime and Recent components fetching their respective data and displaying using the table-grid component.


On my render function i have an table which will display the campers's information for example it will show each camper's image, username ,recent or points in past 30 days, lastuddate which is all time points and lastly it will show number one up to number last.



