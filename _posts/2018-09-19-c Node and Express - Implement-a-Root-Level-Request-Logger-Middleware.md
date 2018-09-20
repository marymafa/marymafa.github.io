---
layout: post
title: Node and Express - Implement a Root-Level Request Logger Middleware
date: 2018-09-19
---

### Node and Express - Implement a Root-Level Request Logger Middleware
Middleware functions are functions that take 3 arguments for example(function(req, res, next) {
console.log("I'm a middleware...");
next();
}

the request object, the response object, and the next function in the application’s request-response cycle.hese functions execute some code that can have side effects on the app, and usually add informations to the request or response objects.They can also end the cycle sending the response, when some condition is met. If they don’t send the response, when they are done they start the execution of the next function in the stack. This is triggered calling the 3rd argument next(). More information in the express documentation.

In this exercise we are going to build a root-level middleware. As we have seen in challenge 4, to mount a middleware function at root level we can use the method app.use(<mware-function>). In this case the function will be executed for all the requests, but you can also set more specific conditions. For example, if you want a function to be executed only for POST requests, you could use app.post(<mware-function>). Analogous methods exist for all the http verbs (GET, DELETE, PUT, …).

Build a simple logger. For every request, it should log in the console a string taking the following format: method path - ip. An example would look like: GET /json - ::ffff:127.0.0.1. Note that there is a space between method and path and that the dash separating path and ip is surrounded by a space on either side. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object, using req.method, req.path and req.ip. Remember to call next() when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives…

Hint: Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before

* code
app.use(function middleware(req, res, next) {
  // Do something
   var string = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(string);
  // Call the next function in line:
  next();
});

### Basic Node and Express - Chain Middleware to Create a Time Server
Middleware can be mounted at a specific route using app.METHOD(path, middlewareFunction). Middleware can also be chained inside route definition.

This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data. At each point of the middleware stack you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases. We will see how in the advanced Express section.

In the route app.get('/now', ...) chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString(). In the handler, respond with a JSON object, taking the structure {time: req.time}.

code 
app.get('/now', function(req, res, next) {
req.time= new Date().toString() // Hypothetical synchronous operation
next();
}, function(req, res) {
res.send( {time: req.time});
})

### Basic Node and Express - Get Route Parameter Input from the Client

When building an API, we have to allow users to comunicate us what they want to get from our service. For example, if the client is requesting information about a user stored in the database, they need a way to let us know which user they're interested in. One possible way to achieve this result is using route parameters. Route parameters are named segments of the URL, delimited by slashes (/). Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the req.params object.




