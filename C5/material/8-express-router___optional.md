# Express router _OPTIONAL_

Sometimes our applications get so big that we need to split them up into multiple files. This is where Express router comes in. Router is a mini Express application that can be mounted on a path. This allows us to split our application into multiple files.

## How to use router

To use router, we need to create a router object. We can then add routes to the router object. Finally, we can mount the router object on a path.

```js
// Create a router object
const router = express.Router();

// Add routes to the router
router.get("/", (req, res) => {
    res.send("Hello World!");
});

// Mount the router on a path
app.use("/hello", router);
```
