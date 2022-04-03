let idCount = 3;

let tweets = [
  {
    id: 1,
    username: "kong",
    text: "hi my tweet!",
    createAt: new Date(),
    url: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    username: "ha",
    text: "hi my tweet2!",
    createAt: new Date(),
    url: "https://i.pravatar.cc/300",
  },
];

export async function getAllTweets() {
  return tweets;
}

export async function getAllTweetsByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export async function getAllTweetsById(id) {
  return tweets.find((t) => t.id === parseInt(id));
}

export async function createTweets(text, username, name) {
  const tweet = {
    id: idCount++,
    username,
    name,
    text,
    createAt: new Date(),
    url: "https://i.pravatar.cc/300",
  };

  tweets = [tweet, ...tweets];
  return tweet;
}

export async function modifyTweets(id, text) {
  let flag = false;

  tweets.forEach((t) => {
    if (t.id === parseInt(id)) {
      t.text = text;
      flag = true;
    }
  });
  return flag;
}

export async function deleteTweet(id) {
  let flag = false;

  const idx = tweets.findIndex((t) => t.id === parseInt(id));
  if (idx != -1) {
    tweets.splice(idx, 1);
    flag = true;
  }
  return flag;
}
