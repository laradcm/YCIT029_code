const uuid = require("uuid").v4;


function createUsersDB(qty){

    const users = new Map();
    
    for (let i = 0; i < qty; i++) {

        const id = uuid();

        users.set(id, {
            id,
            name: "Lara M " + i,
            email: `test${i}@test.com`,
            checkedOutBooks: []
        });

    }

    return users;
}

module.exports = createUsersDB(5);
