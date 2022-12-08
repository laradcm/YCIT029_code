# Express error handler middleware

You can add an error handler middleware to handle errors that occur in your application. This is useful for logging errors and sending a response to the client.

Express comes with a default error handler middleware that you can use to handle errors in your application. This middleware is added automatically when you create an Express application instance using the `express` function.

This default error handler will return a 500 status code and the error message to the client. This is not very useful, so we will replace it with our own error handler.

Regular middleware functions take three arguments: `req`, `res`, and `next`.
Error handler middleware functions take four arguments: `err`, `req`, `res`, and `next`. The first argument is the error that occurred.

To add an error handler middleware, you use the `app.use` method. The error handler middleware should be added after all other middleware.

```js
// Add error handler middleware
app.use((err, req, res, next) => {
    // Log the error
    console.error(err);
    // Send a 500 response
    res.status(500).send("Something broke!");
});
```

The error handler middleware should be the last middleware in your application. If you add middleware after the error handler, it will never get called.

## How to handle errors

You can throw an error by calling `next` with an error object (or any value you want) as the first argument.

```js
app.get("/error", (req, res, next) => {
    // Throw an error
    next("Something broke!"); // <--- Pass any value to `next` will cause Express to treat it as an error
});
```

## Error handling in promises

If you use promises, you can use the `catch` method to handle errors. If an error occurs in a promise, it will be passed to the `catch` method.

```js
app.get("/users", (req, res, next) => {
    // Get the users from the database
    db.getUsers()
        .then((users) => {
            // Send the users to the client
            res.json(users);
        })
        .catch((err) => {
            // Pass the error to the error handler
            next(err);
        });
});
```

## Error handling in async functions (we haven't covered async/await syntax yet but I think it's important to include this)

When you use async functions, you can use the `try`/`catch` syntax to handle errors. If an error occurs in an async function, it will be thrown and the `catch` block will be executed.

```js
app.get("/users", async (req, res, next) => {
    try {
        // Get the users from the database
        const users = await db.getUsers();
        // Send the users to the client
        res.json(users);
    } catch (err) {
        // Pass the error to the error handler
        next(err);
    }
});
```

## Error handling in callbacks (we haven't covered callback syntax yet but I think it's important to include this)

If you use callbacks, you can pass the error to the `next` function. If an error occurs in a callback, it will be passed to the `next` function.

```js
app.get("/users", (req, res, next) => {
    // Get the users from the database
    db.getUsers((err, users) => {
        if (err) {
            // Pass the error to the error handler
            next(err);
        } else {
            // Send the users to the client
            res.json(users);
        }
    });
});
```
