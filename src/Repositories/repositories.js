const { where } = require("sequelize");
const User=require("../Models/user")
const sequelize=require("../InfraStructure/psqlconnetion")
 const GetDataFromRepo=async()=>{
    try{
        const UserData = await User.findAll();  
        return UserData;
        

    }
    catch(err){
        console.log("Error in Repository of GetDataFromService");
        console.error(err);
    }

}
const DataFromRepo=async(createUser)=>{
    try{
        const data=await User.create(createUser);
        return data;

    }
    catch(error){
        console.log("Error in Repository of DataFromRepo");
        console.error(error);

    }

}
const UserDelFromRepo=async(ID)=>{
    try{
        const FindUser=await User.findOne({where:{id:ID}})
        if(FindUser){
            const UserDelete =await FindUser.destroy(ID);  
            const UserDel=`User Deleted With Id ${ID}`;         
           return UserDel;
        }
    }
    catch(error){
        console.log("Error in Repository of UserDelFromRepo");
        console.error(error);
    }
}

const UserFindFromRepo=async(id)=>{
    try{
        const UserFind=await User.findOne({where:{id:id}});
        if(UserFind){
            return UserFind;
        }
        else{
           const data="User Not Found";
            return data;
        }
    }
    catch(error){
        console.log("Error in Repository of UserFindFromRepo");
        console.error(error);
    }
}
const UpdateUserFromRepo=async(UserID,ReqBody)=>{
    try{
        const UserUpdate= await User.findOne({where:{id:UserID}})
        if(UserUpdate){
            const UpdateUser=await UserUpdate.update(ReqBody);
            return UpdateUser
        }
        else{
            const data="User Not Found";
            return data;
        }
    }
    catch(error){

    }
}

const SignupFromRepo=async(SignupUser)=>{
    try{
        const data=await User.create(SignupUser);
        return data;

    }
    catch(error){
        console.log("Error in Repository of SignupFromRepo");
        console.error(error);

    }
}
const LoginFromRepo = async (username, password) => {
    try {
const user = await User.findOne({ where: { username,password }});

        console.log("UserData",user)
        console.log("Password ",password)
        if (user) {
            
            if (user.password === password) {
                return "Login Successfully";
            } else {
                return "Password is Incorrect";
            }
        } else {
            return "User Not Found";
        }
    } catch (error) {
        console.log("Error in Repository of LoginFromRepo");
        console.error(error);
        throw error; // Rethrow the error for handling further up in the application
    }
};



module.exports={
    GetDataFromRepo,
    DataFromRepo,
    UserDelFromRepo,
    UserFindFromRepo,
    UpdateUserFromRepo,
    SignupFromRepo,
    LoginFromRepo
}