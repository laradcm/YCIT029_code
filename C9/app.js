
//-------imports & variables ------
const {urlencoded} = require("express");
const express = require("express");
const uuid = require("uuid").v4;
const userDB = require("./usersDB");
const app = express();
const userRouter = express.Router();
const PORT = 3333;

//----parsers---------------------
app.use(express.json());
app.use(urlencoded({extended:true}));


//------setting routes-------------
app.use("/user", userRouter);

//-------routers-------------------
userRouter.route("/")
    .get(readAllUsers)
    .post(createUser);

userRouter.route("/:id")
    .get(readUser)
    .put(updateUser)
    .delete(deleteUser);


//-------Listen----------------------
app.listen(PORT, console.log("listening on port " + PORT));


//------functions--------------------

function readAllUsers(req, res, next){

    try {

        console.log("read all users");
        res.json(showAllUsers(userDB));

    } catch (error) {

        console.error('Failed to get users: ', error.message);

        res.status(400).json({
            message: "failed to read users" 
        });
    }

}

function createUser(req, res, next){

    try {
        
        const id = uuid();
        const newUser = makeUserObject(id, req.body.name, req.body.email);

        userDB.set(id, newUser);
        console.log("created user");
        res.status(201).json(newUser);  

    } catch (error) {

        console.error('Failed to create user: ', error);

        res.status(400).json({
            message: "failed to create user: " + error
        });
    }
}

function readUser(req, res, next){

    const id = getRandomUserfoTesting(userDB);
    console.log("read user");
    res.json(userDB.get(id));
}

function updateUser(req, res, next){

    try {

        const id = getRandomUserfoTesting(userDB);
        const updateUser = makeUserObject(id, req.body.name, req.body.email);
    
        userDB.set(id, updateUser);
        console.log("updated user");
        res.json(showAllUsers(userDB));

    } catch (error) {

        console.error('Failed to update user: ', error);

        res.status(400).json({
            message: "failed to update user: " + error
        });
    }
    

}

function deleteUser(req, res, next){

    try {

        const id = getRandomUserfoTesting(userDB);

        userDB.delete(id);
        console.log("deleted user");
        res.json(showAllUsers(userDB));

    } catch (error) {

        console.error('Failed to delete user: ', error);

        res.status(400).json({
            message: "failed to delete user: " + error
        });
    }



}

function getRandomUserfoTesting(userDB){

    let index = Math.floor(Math.random() * userDB.size);
    let cntr = 0;

    for (let key of userDB.keys()) {
        if (cntr++ === index) {
            return key;
        }
    }
}

function showAllUsers(userMap){
    return Object.values(Object.fromEntries(userMap));
}

function makeUserObject(id, nameIn, emailIn){
    if (!nameIn) {
        throw("name is required");
    }
    if (!emailIn) {
        throw("email is required");
    }

    return  {
        id,
        name: nameIn,
        email: emailIn,
    }
}

