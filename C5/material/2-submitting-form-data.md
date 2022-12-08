# Submitting form data

Now that our server serves our HTML, we can start to add some interactivity to it. We'll start by adding a form to our HTML, and then we'll see how to handle the data that the user submits.

We will need to add this middleware to our server:

```js
app.use(
    express.urlencoded({
        extended: true,
        type: "application/x-www-form-urlencoded",
    })
);
```

This middleware will parse the form data that the user submits, and add it to the `req.body` object.

We can extract the data from the `req.body` object in our route handler:

```js
console.log(req.body);
```

Be sure to put the route handler _after_ the middleware, otherwise the `req.body` object will be empty.
