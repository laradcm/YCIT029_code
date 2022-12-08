# Serving your frontend with express

Using the express static middleware, you can serve your frontend files from the `public` folder.

```js
// Add static files middleware
app.use(express.static("public"));
```

In the public folder, we create a simple HTML file with a login form:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <!-- This is a simple login form -->
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </body>
</html>
```

Be sure to put method="POST" on the form tag, otherwise the form will be submitted using GET and the password will be visible in the URL.

By using POST, the password will be sent in the request body and not in the URL.

However, we need to tell express to parse the request body. We can do this by adding the `express.urlencoded` middleware
