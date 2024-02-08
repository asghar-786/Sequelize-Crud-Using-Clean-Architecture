const {GetDataFromRepo,DataFromRepo,UserDelFromRepo,UserFindFromRepo,UpdateUserFromRepo,SignupFromRepo,LoginFromRepo}=require("../Repositories/repositories")

const GetDataFromService=async()=>{
    try{
    const GetData=await GetDataFromRepo();
    return GetData;
    }
    catch(err){
        console.log('Error in Service of GetDataFromService');
        console.error(err);
    }

}
const CreateDataFromService = async(createUser)=>{
        try{
                const createData=await DataFromRepo(createUser);
                return createData;
        }
        catch(error){
            console.log('Error in Service of CreateDataFromService');
        console.error(error);
            
        }
}

const UserdelFromService=async(ID)=>{
    try{
        const data=await UserDelFromRepo(ID);
        return data;

    }catch(error){
        console.log('Error in Service of UserdelFromService');
        console.error(error);

    }

}
const FindUSerInService=async(UserID)=>{
    try{
        const FindUser=await UserFindFromRepo(UserID);
        return FindUser;
    }
    catch(error){
        console.log('Error in Service of FindUSerInService');
        console.error(error);
    }
}

const UpdateDataFromService=async(UserID,ReqBody)=>{
    try{
            const UpdateUser=await UpdateUserFromRepo(UserID,ReqBody);
            return UpdateUser;
    }
    catch(error){
        console.log('Error in Service of UpdateDataFromService');
        console.error(error);

    }
}
const SignupDataFromService=async(username,password)=>{
    try{
        const createData=await SignupFromRepo(username,password);
        return createData;
}
catch(error){
    console.log('Error in Service of SignupDataFromService');
console.error(error);
    
}

}

const LoginDataFromService=async(username,password)=>{
    try{
        const createData=await LoginFromRepo(username,password);
        return createData;
}
catch(error){
    console.log('Error in Service of LoginDataFromService');
console.error(error);
    
}

}


module.exports={
    GetDataFromService,
    CreateDataFromService,
    UserdelFromService,
    FindUSerInService,
    UpdateDataFromService,
    SignupDataFromService,
    LoginDataFromService
}