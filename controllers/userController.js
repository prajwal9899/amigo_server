import defaulterModel from "../models/defaultersModel.js";
import userModel from "../models/userModel.js";

class userController {
  static getDefaulters = async (req, res) => {
    try {
      const data = defaulterModel
        .find({})
        .exec()
        .then((data) => {
          res.json(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  static getUserDetails = async (req, res) => {
    try {
      const user = await userModel.findOne({ _id: req.body.userId });
      if (!user) {
        res.send({ message: "user not found" });
      } else {
        res.send({
          success: true,
          data: {fullName: user.fullName, registrationNo: user.registrationNo, email: user.email },
        });
      }
    } catch (error) {
      console.log(error);
      res.send({ message: "auth error" });
    }
  };
}

export default userController;
