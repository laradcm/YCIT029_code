# Protecting a route

Routes are protected by middleware. If the middleware calls `next()`, the route handler will be called. If the middleware calls something else, like: `res.send()` or `res.redirect()` and then returns without calling `next()`, then the route handler will not be called.

We can use this to protect our routes. If the user is not logged in, we can redirect them to the login page. If they are logged in, we can call `next()` to continue to the route handler.

```js
app.get(
    "/protected",
    (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect("/login");
        }
    },
    (req, res) => {
        res.send("You are logged in!");
    }
);
```

Some of your routes you do not care if it is protected or not. Other routes you do care. You can compose middleware to protect only the routes you care about.

```js
const protect = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
};

app.get("/protected", protect, (req, res) => {
    res.send("You are logged in!");
});

app.get("/not-protected", (req, res) => {
    res.send("You are not logged in!");
});
```

# Question-1 Protecting multiple routes with middleware

Using what you know about express, can you protect multiple routes with a single middleware function?
