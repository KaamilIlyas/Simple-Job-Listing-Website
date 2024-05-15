import User from '../Model/UserInfo.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  req.body.password = hashedPassword;

  const user = await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    bio:req.body.bio,
    address:req.body.address,
    mobile:req.body.mobile,
    role:req.body.role,
    imgLink:req.body.imgLink,
    city:req.body.city

  })

  if (user) {
    res.status(201).json({
      message: 'User created successfully',
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

const profile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id)

  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      mobileNumber: user.mobile,
      address: user.city,
      role: user.role,
      imgLink: user.imgLink,
      bio: user.bio,

    })
  } 
  
  else {
    res.status(404)
    throw new Error('User not found')
  }
})

export  {
  registerUser,
  loginUser,
  getMe,
  profile
}
