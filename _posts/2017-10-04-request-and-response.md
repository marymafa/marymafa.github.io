---
layout: post
title: request and response
date: 2017-10-04
---

### Request 

*is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

### Response

*The basic idea is to build request for HTTP Responses.

*When pipeing files to response it will lookup the mime type and set the propert content-type header for whatever file extension you send it.

### Request/response cycle

1-A user opens his browser, types in a URL, and presses Enter.

2-When a user presses Enter, the browser makes a request for that URL.

3-The request hits the Rails router (config/routes.rb). The router maps the URL to the correct controller and action to handle the request.

4-The action receives the request and passes it on to the view.

5-The view renders the page as HTML.

6-The controller sends the HTML back to the browser. The page loads and the user sees it.

