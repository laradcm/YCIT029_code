# Review of Express.js

## What is Express.js?

Express.js is a web application backend framework for Node.js. It is designed for building backends and APIs. It is a minimilist framework, which aims to enough comfort (developper experience) without getting in your way.

## Why frameworks?

Frameworks improve the developper experience by providing a set of tools and conventions to build applications. However, frameworks don't automatically solve all your problems. They are a tool, and you should continuously research and understand what your tools are doing.

## Requests and responses

A request is a message sent from the client to the server. A response is a message sent from the server to the client. The client is typically a web browser (like Chrome, Safari, etc...), but it could also be any program that sends HTTP requests (ex: Insomnia, cURL, another server, etc...).

## Routing

Routing is the process of directing incomming HTTP requests to your code. Here, "your code" is known as a "route handler".

## Route handlers

A route handler is a function that is called whenever the server receives a request. This route handler function is responsible for processing the request as well as sending back a response to the client.

## Middleware

Whenever your express server receives a request, you can have these "middleware" functions, which are similar to route handlers. One difference is that middleware get called _before_ a route handler. This is useful whenever you want to perform some processing on the request _before_ calling a route handler.

Middleware are also able to "short-circuit" the processing of a request and send back a response to the client immediately. In these cases, it means that the route handler will not get called.

Middleware is useful in many cases, for example: if you want to check if the user is authenticated (signed in) before granting access to any particular route. If the user is not signed in, you can send back a 401 response to the client and prevent the route handler from getting called.

Middleware can also be used to parse the body of a request, or to log information about the request.

Middleware can also be used to plug in third-party libraries. For example, you can use the `express-session` middleware to add "sessions", which are a way to store information about a user between requests (think of it as a cookie, but stored on the server).

Middleware can also be used to serve static files (such as: index.html, images, CSS, etc...).

## Static files

Static files are files that are served by the server as-is. For example, if your server has a `my-styles.css` file, you can make use of the Express static middleware to serve this file to the client. The client will then be able to use this file for styling the webpage.
