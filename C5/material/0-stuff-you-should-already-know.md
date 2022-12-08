# Stuff you should already know

## First of all, read the README.md included in this repo

## Sending back a response

There are various methods you can use to send a response back to the client. The most common are `res.send()` and `res.json()`.

```js
app.get("/hello", (req, res) => {
    res.send("Hello World!");
});
```

```js
app.get("/hello", (req, res) => {
    res.json({ message: "Hello World!" });
});
```

## Sending a status code

You can send a status code with the `res.status()` method.

```js
app.get("/hello", (req, res) => {
    res.status(200).send("Hello World!");
});
```

## Adding context to the `req` object

You can add context to the `req` object by adding properties to it.

```js
app.get("/hello", (req, res) => {
    req.message = "Hello World!";
    res.send(req.message);
});
```

## res.locals

While you could use the `req` object to store context (like in the example above) it's not recommended. We shouldn't tamper with the `req` object because it's used by Express internally.

While you could use the `res` object to store context, it's not a good idea because the `res` object is used to send the response back to the client. If you add properties to the `res` object, you might accidentally send them back to the client.

So what do we do? We use `res.locals` to store context.

```js
app.get("/hello", (req, res) => {
    req.locals.message = "Hello World!";
    res.send(res.locals.message);
});
```

Think of `req.locals` and `res.locals` as a "box" where you can store context. You can put anything you want in the box, but you should only put things in the box that you need to access in other middleware functions.

What's the difference between `req.locals` and `res.locals`? Nothing! They both point to the same object. You can use either one. (Just pick one and stick with it.)

## Lifecyle of req and res objects

The `req` and `res` objects are created when the request comes in and destroyed when the response is sent back to the client.

So, basically, they last for only a very shot while. We say they are "ephemeral".

Anything you put inside the `req.locals` or `res.locals` objects will be destroyed when the request is finished.
