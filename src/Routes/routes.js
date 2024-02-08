const {GEtdata ,CreateData,DeleteUser,GetUserByID,UserUpdate} = require("../controller/controller");

const appRoute = (app) => {

    app.get("/",GEtdata);
    app.post("/Create-user",CreateData);
    app.delete("/users/:id",DeleteUser);
    app.get("/users/:id",GetUserByID);
    app.put("/user/:id",UserUpdate);
};

module.exports = appRoute;
