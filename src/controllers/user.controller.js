import user from "../models/users";

export const getAll = async (req, res) =>{
    try{
        const users = await user.findAll();
        return res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.status(400).json(error)
    }
}