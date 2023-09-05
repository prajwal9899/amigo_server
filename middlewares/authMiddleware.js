import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        res.send({ status: "failed", message: "UnAuthorized User" });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleware;
