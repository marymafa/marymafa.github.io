---
layout: post
title: Server Rendering
date: 2018-05-07
---

### Server Rendering

The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests our app. When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties.

When using Redux with server rendering, we must also send the state of our app along in our response, so the client can use it as the initial state. This is important because, if we preload any data before generating the HTML, we want the client to also have access to this data. Otherwise, the markup generated on the client won't match the server markup, and the client would have to load the data again.

### To send the data down to the client, we need to:

* create a fresh, new Redux store instance on every request;

* optionally dispatch some actions;

* pull the state out of store;

* and then pass the state along to the client.

On the client side, a new Redux store will be created and initialized with the state provided from the server.
Redux's only job on the server side is to provide the initial state of our app.