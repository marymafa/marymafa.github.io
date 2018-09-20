---
layout: post
title: Node and Express - Serve Static Assets
date: 2018-09-20
---

###  Node and Express - Serve Static Assets
An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images). In Express you can put in place this functionality using the middleware express.static(path), where the parameter is the absolute path of the folder containing the assets. If you don’t know what a middleware is, don’t worry. We’ll discuss about it later in details. Basically middlewares are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method app.use(path, middlewareFunction). The first path argument is optional. If you don’t pass it, the middleware will be executed for all the requests.but the correct way to use middleware is app.use(express.static());

Mount the express.static() middleware for all the requests with app.use(). The absolute path to the assets folder is __dirname + /public.

###  Node and Express - Serve JSON on a Specific Route

While an HTML server serves (you guessed it!) HTML, an API serves data.A REST (REpresentational State Transfer) API allows data exchange in a simple way, without the need for clients to know any detail about the server.e GET verb is used when you are fetching some information, without modifying anything(it tisused to fetch info).the method res.json(), passing in an object as an argument,This method closes the request-response loop, returning the data.

* code
app.get('/json', function (req, res) {
  var data= {"message": "Hello json"};
  res.json(data);
})

### Basic Node and Express - Use the .env File

The .env file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden.you can store API keys from external services or your database URI.ou can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.The environment variables are accessible from the app as process.env.VAR_NAME.he process.env object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The .env is a shell file, so you don’t need to wrap names or values in quotes.It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value. Usually, you will put each variable definition on a separate line. the .evn should be like this(VAR_NAME=value); process dotenv is a global node object where the variables are passed as strings.

let's add an environment variable as a configuration option. Store the variable MESSAGE_STYLE=uppercase in the .env file. Then tell the GET /json route handler that you created in the last challenge to transform the response object’s message to uppercase if process.env.MESSAGE_STYLE equals uppercase. The response object should become {"message": "HELLO JSON"}.

* code
app.get("/json", (req, res) => { let message = "Hello json"; (process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; res.json({"message": message}); });


