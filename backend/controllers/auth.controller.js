import generateTokenAndSetCookie from "../Utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const login = (req, res) => { 
	console.log('firt');
};

export const logout = (req, res) => {
	console.log('first');
};

export const signup = async (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body;
		if (confirmPassword !== confirmPassword) {
			return res.status(400).json({ error: "Passowords don't match" });
		}
        const user = await User.findOne({userName})

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        if (!userName || userName.trim().length === 0) {
            return res.status(400).json({ error: "Username is required" });
          }



        // Hash Password Here 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic :girlProfilePic
        })

        if(newUser){

            // Generate JWT token
             generateTokenAndSetCookie(newUser._id,res)


            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                userName:newUser.userName,
                profilePic:newUser.profilePic
            })
        } else{
            res.status(400).json({error:"Invalid user data"})
        }
 

        

	} catch (error) {
		console.log('error message', error.message);
        res.status(500).json({error:error.message})
	}
};
