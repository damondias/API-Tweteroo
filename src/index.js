import express, {json}  from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const tweetUser = {
      username: req.body.username,
      tweet: req.body.tweet,
      avatar: users.find((user) => user.username === req.body.username).avatar,
    };
  
    tweets.push(tweetUser);
    res.send("OK");
});

app.listen(5000, () => {
    console.log("Rodando API tweteroo em http://localhost:5000");
})

