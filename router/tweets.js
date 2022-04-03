import express from "express";
import * as tweetsController from "../controller/tweets.js";

const router = express.Router();

router.get("/", tweetsController.getTweets);
router.get("/:id", tweetsController.getTweetsById);
router.post("/", tweetsController.createTweet);
router.put("/:id", tweetsController.updateTweet);
router.delete("/:id", tweetsController.removeTweet);

export default router;
