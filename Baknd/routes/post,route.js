import express from "express";
const router = express.Router();

const authUser = require('../middleware/user.auth.js')

router.post("/post", authUser.authMiddleware, postController.createPost);

router.get("/post", postController.getAllPosts);