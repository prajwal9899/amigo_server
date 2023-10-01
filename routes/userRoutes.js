import express from "express";
const router = express.Router();
import authController from "../controllers/authController.js";
import uploadController from "../controllers/uploadController.js";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminController from "../controllers/adminController.js";

// Public Routes
router.post("/login", authController.userLogin);
router.post("/register", authController.userRegistration);

// Protected routes
router.post("/upload",  uploadController.uploadExcelData);
router.get("/get-defaulters",  userController.getDefaulters);
router.post("/getUserData", authMiddleware, userController.getUserDetails);


// Admin routes
router.get("/admin/getUsers", adminController.getUsers);


export default router;
