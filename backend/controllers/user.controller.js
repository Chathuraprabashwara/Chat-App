import User from "../models/user.model.js";

export const  getUsersForSidebar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id;

        const filterUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password") // $ne means not equal , it's retrive all users without logging user
        res.status(200).json(filterUsers)

    }catch(error){
        console.log("Error in getUserForSidebar: ", error)
        res.status(500).json({error:'Internal  server'})
    }
}