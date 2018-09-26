---
layout: post
title: Basic Node and Express - Use body-parser to Parse POST Requests
date:2018-09-26
----

### Basic Node and Express - Use body-parser to Parse POST Requests.

Besides GET there is another common http verb, it is POST. POST is the default method used to send client data with HTML forms. In the REST convention POST is used to send data to create new items in the database (a new user, or a new blog post). We don’t have a database in this project, but we are going to learn how to handle POST requests anyway.

As you can see the body is encoded like the query string. This is the default format used by HTML forms. With Ajax we can also use JSON to be able to handle data having a more complex structure. There is also another type of encoding: multipart/form-data. This one is used to upload binary files.


To parse the data coming from POST requests, you have to install a package: the body-parser. This package allows you to use a series of middleware, which can decode data in different formats. See the docs here.

The middleware to handle url encoded data is returned by bodyParser.urlencoded({extended: false}). extended=false is a configuration option that tells the parser to use the classic encoding. When using it, values can be only strings or arrays. The extended version allows more data flexibility, but it is outmatched by JSON. Pass to app.use() the function returned by the previous method call. As usual, the middleware must be mounted before all the routes which need it.

### code
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


### Basic Node and Express - Get Data from POST Requests

Mount a POST handler at the path /name. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object req.body. Have a look at the usual library example:

    route: POST '/library'
    urlencoded_body: userId=546&bookId=6754
    req.body: {userId: '546', bookId: '6754'}

Respond with the same JSON object as before: {name: 'firstname lastname'}. Test if your endpoint works using the html form we provided in the app frontpage.

Tip: There are several other http methods other than GET and POST. And by convention there is a correspondence between the http verb, and the operation you are going to execute on the server. The conventional mapping is:

POST (sometimes PUT) - Create a new resource using the information sent with the request,

GET - Read an existing resource without modifying it,

PUT or PATCH (sometimes POST) - Update a resource using the data sent,

DELETE => Delete a resource.

There are also a couple of other methods which are used to negotiate a connection with the server. Except from GET, all the other methods listed above can have a payload (i.e. the data into the request body). The body-parser middleware works with these methods as well.

### Code 
app.post('/name',function(req,res){
  var jsonObj={"name" : req.body.first +' '+req.body.last}
  res.json(jsonObj);
});

