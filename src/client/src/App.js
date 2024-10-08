import "./App.css";
import { useEffect } from "react";
import ChessAPI from "./api/api-service";

function App() {
  var chessAPI = new ChessAPI("EvanBoettner");

  useEffect(() => {
    const load = async () => {
      let profile = await chessAPI.getProfile();
      console.log(profile);
      let stats = await chessAPI.getStats();
      console.log("Stats: ", stats);
      let games = await chessAPI.getAllArchives();
      console.log("Games: ", games);
      let this_months_games = await chessAPI.getArchivesByMonth('2024', '09');
      console.log('Games This Month: ', this_months_games);
    };
    load();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
