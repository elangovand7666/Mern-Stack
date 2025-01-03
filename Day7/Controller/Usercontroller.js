import User from "../Model/User.js";

export const check=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findOne({_id:id})
        if(!userExist){
            res.status(400).json({message:"User not found"})
        }
        else{
            res.status(200).json({message:userExist})
        }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

export const create=async(req,res)=>{
    try{
        const userdata=new User(req.body)
        const {email}=userdata

        const userExist=await User.findOne({email})
        if(userExist){
            res.status(400).json({message:"User already Exists"})
        }
        else{
            const s=userdata.save()
            res.status(200).json({message:s})
        }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

export const update=async(req,res)=>{
    try{
        const id=req.params.id
        const userExist=await User.findOne({_id:id})
        if(userExist){
            const s=await User.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json({message:s})
        }
        else{
            res.status(400).json({message:"User Doesn't Exists"})
        }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

export const dele =async(req,res)=>{
    try{
        const id=req.params.id
        const userExist=await User.findOne({_id:id})
        if(userExist){
            const s=await User.findByIdAndDelete(id)
            res.status(200).json({message:s})
        }
        else{
            res.status(400).json({message:"User Doesn't Exists"})
        }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}