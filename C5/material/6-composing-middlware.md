# Composing Middleware

We can compose middleware by passing multiple middleware functions to the `app.use()` method. The middleware functions will be executed in the order they are passed to `app.use()`.

```js
app.use(middleware1, middleware2, middleware3);
```

We can also compose middleware by passing an array of middleware functions to `app.use()`.

```js
app.use([middleware1, middleware2, middleware3]);
```

You can also pass a path to `app.use()`. The middleware will only be executed if the path matches the request path.

```js
app.use("/users", middleware1, middleware2, middleware3);
```

Lots of options!

You can even put the middleware in a separate file and import it.

```js
// middleware.js
module.exports = (req, res, next) => {
    // Do something
    next();
};

// app.js
const middleware = require("./middleware");
app.use(middleware);
```

How about putting the middleware with your handler? You can do that too!

```js
app.get("/users", middleware1, middleware2, (req, res) => {
    // Do something
});
```

Prefer the array syntax? Sure!

```js
app.get("/users", [middleware1, middleware2], (req, res) => {
    // Do something
});
```

Express will execute the middleware before the route handler.

Express really doesn't care how you compose your middleware. You can do it however you want.

# Question-1 Composing middleware

Write 2 middleware functions. The first middleware function should add a property to `req` called `message` and set it to `Hello`. The second middleware function should add a property to `req` called `name` and set it to `World`. The route handler should send the message and name to the client.
