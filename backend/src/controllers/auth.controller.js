import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export async function signup(req, res) {
 const {email, passsword, fullname} =  req.body;
 
 try {
    if(!email || !passsword || !fullname) {
        return res.status(400).json({message: 'All fields are required'});
    }
    if(passsword.length < 6) {
        return res.status(400).json({message: 'Password must be at least 6 characters long'});
    }   
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({ message: "Invalid email format" });
}

const existingUser = await User.findOne({ email})
if (existingUser) {
  return res.status(400).json({ message: "Email already exists" });
}

const idx= Math.floor(Math.random() * 100)+1;
const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

const newUser = new User({
    fullname,
    email,
    password: passsword,
    profilePic: randomAvatar,
});

const token = jwt.sign({
    
})
 } catch (error) {
    
 }

}

export async function signin(req, res) {
    res.send('Signin page');
}

export async function logout(req, res) {
    res.send('logout page');
}