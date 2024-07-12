// MERN-Fullstack/backend/routes/UserRoute.js
import express from "express";
import { getUsers, getUsersById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", saveUser);
router.put("/users/:id", updateUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;