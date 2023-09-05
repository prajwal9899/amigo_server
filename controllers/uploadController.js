import defaulterModel from "../models/defaultersModel.js";

class uploadController {
  static uploadExcelData = async (req, res) => {
    try {
      const data = req.body;
      await defaulterModel
        .insertMany(data)
        .then(() => {
          res.json({ message: "Uploaded Successfully" });
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export default uploadController;
