const User = require("../Models/user");
const {GetDataFromService,CreateDataFromService,UserdelFromService,FindUSerInService,UpdateDataFromService }=require("../service/service")

const GEtdata=async (req,reply)=>{
    try{
        const getdata= await GetDataFromService();
        if(getdata){
            reply.send({
                code:200,
                status:"success",
                data:getdata
            })
        }
        else{
            reply.send({
                code:200,
                status:"User Not Found",
            })
        }
    }

    catch(err){
        console.error(err)
        reply.send({
            code:500,
            status:'Failed',
        })

    }
}
const CreateData=async(req,reply)=>{
    try{
        const CreateUser=req.body;
        const createData=await CreateDataFromService(CreateUser);
        if(createData){
            reply.send({
                code:200,
                status:"success",
                data:createData,

            })
        }
        else{
            reply.send({
                code:200,
                status:"User Not Found",
            })
        }
    }
    catch(error){
        console.log("Error in CreateDAta In Controller");
        console.error(error);

        reply.send({
            code:400,
            status:"failed",
        })

    }

}

const DeleteUser=async(req,reply)=>{
        try{
            const ID=req.params.id;
            const userdel=await UserdelFromService(ID);
            if(userdel){
               
                reply.send({
                    code:200,
                    status:"success",
                    data:userdel,
                })
            }
            else{
                reply.send({
                    code:200,
                    status:"User Not Found",
                })
            }
        }
        catch(error){
            console.log("Error in User Delete Data at Controller");
            reply.send({
                code:500,
                status:"Failed",
            })
        }
}
const GetUserByID=async(req,reply)=>{
try{
    const UserID=req.params.id;
    const UserFind=await FindUSerInService(UserID);
    if(UserFind){
        reply.send({
            code:200,
            status:"success",
            data:UserFind
        })
    }
    else{
        reply.send({
            code:200,
            status:`User Not Found With Id ${UserID}`
        })
    }

}
catch(error){
        reply.send({
            code:500,
            status:"Failed",
        })
}
}
const UserUpdate=async(req,reply)=>{
    try{
        const UserID=req.params.id;
        const ReqBody=req.body;
        const userUpdate=await UpdateDataFromService(UserID,ReqBody);
        if(userUpdate){
            reply.send({
                code:200,
                status:"success",
                data:userUpdate
            })
        }
        else{
            reply.send({
                code:200,
                status:"User Not Found",
            })
        }
    }catch(error){
        reply.send({
            code:500,
            status:"Failed",

        })

    }
}

module.exports={
    GEtdata,
    CreateData,
    DeleteUser,
    GetUserByID,
    UserUpdate
}