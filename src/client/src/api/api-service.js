import axios from "axios";
class ChessAPI {
  constructor(username) {
    this.username = username;
    this.url = `https://api.chess.com/pub/player/${username}`;
  }
  async getProfile() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: this.url,
    };
    let profile = await axios.request(config);
    profile = profile.data;
    return profile;
  }
  async getStats() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: this.url + "/stats",
    };
    let stats = await axios.request(config);
    stats = stats.data;
    return stats;
  }
  async getAllArchives() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: this.url + "/games/archives",
    };
    let data = await axios.request(config);
    data = data.data.archives;
    let games = [];
    for (let i = 0; i < data.length; i++) {
      let gameConfig = {
        method: "get",
        maxBodyLength: Infinity,
        url: data[i],
      };
      let gameArr = await axios.request(gameConfig);
      games.push(gameArr.data.games);
    }
    return games.flatMap((game) => game);
  }
}

export default ChessAPI;
