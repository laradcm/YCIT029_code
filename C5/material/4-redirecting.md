# Redirecting the client

With res.redirect(), you can redirect the user to a different page. This is useful when you want to send the user to a different page after they submit a form, for example.

The redirect method takes a single argument, which is the URL to redirect the user to. You can use a relative URL, or an absolute URL.

If you use a relative URL, Express will fill in the hostname and protocol for you. For example, if you redirect the user to `/login`, Express will redirect the user to `http://localhost:3000/login`.

```js
app.post("/login", (req, res) => {
    // Check if the user is logged in
    if (req.session.user) {
        // If they are, redirect them to the home page
        res.redirect("/");
    } else {
        // If they aren't, redirect them to the login page
        res.redirect("/login");
    }
});
```

## Question-1: What is the difference between res.redirect() and res.render()?

## Question-2: How might we inform the browser/client that the login failed?
