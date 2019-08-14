import express from "express";

const userRouter = express.Router();

userRouter.get("/", (rep, res)=> res.send("user index"));
userRouter.get("/edit", (rep, res)=> res.send("user edit"));
userRouter.get("/password", (rep, res)=> res.send("user password"));

export default userRouter;