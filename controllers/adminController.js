import userModel from "../models/userModel.js";
import adminUserModel from "../models/adminUserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class adminController {
  static getUsers = async (req, res) => {
    try {
      const data = userModel
        .find({})
        .exec()
        .then((data) => {
          res.json(data);
        });
    } catch (error) {
      console.log(error);
      res.send({ message: "auth error" });
    }
  };

  static adminUserLogin = async (req, res) => {
    console.log("user");
    try {
      const { email, password } = req.body;

      if (email && password) {
        const user = await adminUserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email == email && isMatch) {
            // generate jwt token
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1d" }
            );
            res.send({
              status: "Success",
              message: "Login success",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Email or Password does not match",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not registered user",
          });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to login" });
    }
  };

  static adminUserRegistration = async (req, res) => {
    const { fullName, email, password } = req.body;

    const user = await adminUserModel.findOne({ email: email });


    if (user) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (fullName && email && password) {
        try {
          const salt = await bcrypt.genSalt(12);
          const hashPassword = await bcrypt.hash(password, salt);
          const newUser = adminUserModel({
            fullName,
            email,
            password : hashPassword,
          });
          await newUser.save();

          res.status(201).send({
            status: "success",
            message: "User Saved successfully",
          });
        } catch (error) {
          console.log(error);
          res.send({ status: "failed", message: "unable to register" });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    }
  };

  static getAdminUserDetails = async (req, res) => {
    try {
      const user = await adminUserModel.findOne({ _id: req.body.userId });
      if (!user) {
        res.send({ message: "user not found" });
      } else {
        res.send({
          success: true,
          data: {fullName: user.fullName,email: user.email },
        });
      }
    } catch (error) {
      console.log(error);
      res.send({ message: "auth error" });
    }
  };
}

export default adminController;
