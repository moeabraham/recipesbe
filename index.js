// old school const express = require("express");
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/users.js";
import { recipesRouter } from "./src/routes/recipes.js";


const app = express()

app.use(express.json()); //when you receive data from front end this will be responsible to turn inot json
app.use(cors());  
app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)


mongoose.connect("mongodb+srv://moeabraham:NOGnognog33@recipes.e8zwf3s.mongodb.net/recipes?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(3001, () => console.log("SERVER STARTED!"));
