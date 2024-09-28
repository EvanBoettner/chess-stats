const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT || 8000;
const playerApi = "https://api.chess.com/pub/player/evanboettner";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send({ health: "OK" });
});

app.get("/profile", async (req, res) => {
  // let data = await axios.get(playerApi);
  // res.send(data);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: playerApi,
  };
  let data = await axios.request(config);
  res.send(data.data);
});

app.get("/stats", async (req, res) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${playerApi}/stats`,
  };
  let data = await axios.request(config);
  res.send(data.data);
});

app.get("/games", async (req, res) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${playerApi}/games/archives`,
  };
  let archive_urls = await axios.request(config);
  archive_urls = archive_urls.data.archives;
  let games = [];
  for (let i = 0; i < archive_urls.length; i++) {
    let archiveConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: archive_urls[i],
    };
    let data = await axios.request(archiveConfig);
    games.push(data.data.games);
  }
  res.send(games);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
