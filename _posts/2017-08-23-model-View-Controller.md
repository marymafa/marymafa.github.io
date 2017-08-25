---
layout: post
title: MVC
date: 2017-08-23
---

### Model View Controller

1-Model : is where alll the application's data are stored.

	-DOesn't know anything about views or controllers.

	-The only thing model should contain is data and logic associated directly with that data.

2-View : Is what presented to the user and is what should interects with.

	-Views shouldn't know anything about controllers and models.

	-Mixing up views with logic is one of the surest paths to disaster.

3-Controller : controles is the gluue between models and views.


	-Receives events and input from views,process them and update the views accordingly.

	-The controller add event listeners to views when the page loads such as  detecting when  forms are submitted or buttons are clicked

