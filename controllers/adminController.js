import defaulterModel from "../models/defaultersModel.js";
import userModel from "../models/userModel.js";

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
}

export default adminController;
