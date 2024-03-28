import generateTokenAndSetCookie from '../Utils/generateToken.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
	try {
		const { userName, password } = req.body;

		if (!userName || userName.trim().length === 0) {
			return res.status(400).json({ error: 'Username is required' });
		}

		if (!password || password.trim().length === 0) {
			return res.status(400).json({ error: 'Password is required' });
		}

		const user = await User.findOne({ userName });
		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: 'Internal Server Error' });
		}

		generateTokenAndSetCookie(user._id, res);
		res.status(200).json({
			_id: user._id,
			fullName: user.userName,
			userName: user.userName,
			profilePic: user.profilePic,
		});

	} catch (error) {
		console.log('error message', error.message);
		res.status(500).json({ error: error.message });
	}
};

export const logout = (req, res) => {
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    }catch{

    }
};

export const signup = async (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body;
		if (confirmPassword !== confirmPassword) {
			return res.status(400).json({ error: "Passowords don't match" });
		}
		const user = await User.findOne({ userName });

		if (user) {
			return res.status(400).json({ error: 'Username already exists' });
		}

		if (!userName || userName.trim().length === 0) {
			return res.status(400).json({ error: 'Username is required' });
		}

		// Hash Password Here
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		const newUser = new User({
			fullName,
			userName,
			password: hashedPassword,
			gender,
			profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			// Generate JWT token
			generateTokenAndSetCookie(newUser._id, res);

			await newUser.save();
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				userName: newUser.userName,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: 'Invalid user data' });
		}
	} catch (error) {
		console.log('error message', error.message);
		res.status(500).json({ error: error.message });
	}
};
