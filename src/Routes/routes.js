const {GEtdata ,CreateData,DeleteUser,GetUserByID,UserUpdate,Signup,Login} = require("../controller/controller");
const User=require("../Models/user");

const appRoute = (app) => {

    app.get("/",GEtdata);
    app.post("/Create-user",CreateData);
    app.delete("/users/:id",DeleteUser);
    app.get("/users/:id",GetUserByID);
    app.put("/user/:id",UserUpdate);

    //LOgin and Signup;
    app.post("/signup",Signup);
    app.post("/login",Login);

   
    
};

module.exports = appRoute;
