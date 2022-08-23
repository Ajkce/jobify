import { nextTick } from "process";
import user from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthError,
} from "../errors/index.js";

const register = async (req, res) => {
  console.log("hello from register")
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }

  const User = await user.create(req.body);
  const token = User.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        email: User.email,
        name: User.name,
        lastname: User.lastname,
        location: User.location,
      },
      token,
    });
};

const login = async (req, res) => {
  console.log("hello from server")
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const User = await user.findOne({ email }).select("+password");

  if (!User) {
    throw new UnAuthError("Invalid credentials");
  }

  console.log(User);
  const isPasswordCorrect = await User.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthError("Invalid Credentials");
  }

  const token = User.createJWT();
  user.password = undefined;

  res.status(StatusCodes.OK).json({User, token, location:User.location})

};

const updateUser = async (req, res) => {
  res.send("update User");
};

export { register, login, updateUser };
