import {
  getAllTweets,
  getAllTweetsByUsername,
  getAllTweetsById,
  createTweets,
  modifyTweets,
  deleteTweet,
} from "../data/tweets.js";

export async function getTweets(req, res, next) {
  const username = req.query.username;
  const data = await (username ? getAllTweetsByUsername() : getAllTweets());
  res.status(200).json(data);
}
export async function getTweetsById(req, res, next) {
  const id = req.params.id;
  const data = await getAllTweetsById(id);
  if (data) {
    return res.status(200).json(data);
  }
  res.status(404).json({ message: "not found" });
}

export async function createTweet(req, res, next) {
  const { text, username, name } = req.body;
  const newTweet = await createTweets(text, username, name);
  res.status(201).json(newTweet);
}

export async function updateTweet(req, res, next) {
  const id = req.params.id;
  const { text } = req.body;

  const result = await modifyTweets(id, text);
  if (result) {
    res.status(200).json({ message: "done" });
  } else {
    res.sendStatus(404);
  }
}

export async function removeTweet(req, res, next) {
  let flag = false;
  const id = req.params.id;
  const result = await deleteTweet(id);

  if (result) {
    res.status(200).json({ message: "done" });
  } else {
    res.sendStatus(404);
  }
}
