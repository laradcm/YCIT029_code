# Sessions

HTTP is a stateless protocol. This means that the server does not keep any data (state) between two requests. However, many applications require the concept of a "session": a way to keep data across multiple requests.

Examples of data that you might want to keep across requests include: authentication data, user information, shopping cart information, and so on.

A session is typically implemented using a cookie. The server will set a cookie in the response, and the browser will store it. The next time the browser makes a request to the server, it will send the cookie along with the request. The server can then use the data in the cookie to identify the user.

## Setting up sessions

To set up sessions, we will use the [express-session](https://www.npmjs.com/package/express-session) package. This package is a middleware that will add a `req.session` object to your requests.

To install the package, run the following command in your terminal:

```bash
npm install express-session
```

We can then add the middleware to our server:

```js
const session = require("express-session");

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);
```

Please note that `secure: true` is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies.
