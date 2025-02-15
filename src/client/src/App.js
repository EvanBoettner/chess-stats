import "./App.css";
import { useEffect, useMemo, useState } from "react";
import ChessAPI from "./api/api-service";
import ProfileCard from "./components/ProfileCard";
import StatContainer from "./components/StatContainer";
import RatingCard from "./components/RatingCard";
import { FaChevronRight } from "react-icons/fa";


function App() {
  const [profile, setProfile] = useState();
  const [stats, setStats] = useState();
  const [recentGames, setRecentGames] = useState();
  const [selectedFormat, setSelectedFormat] = useState();

  var chessAPI = useMemo(() => new ChessAPI("EvanBoettner"), []);

  useEffect(() => {
    const load = async () => {
      var today = new Date();
      var year = today.getFullYear().toString();
      var month = (today.getMonth() + 1).toString();
      month = month.length < 2 ? "0" + month : month;
      console.log(year, month);
      let profile = await chessAPI.getProfile();
      setProfile(profile);
      let stats = await chessAPI.getStats();
      setStats(stats);
      console.log("Stats: ", stats);
      let games = await chessAPI.getAllArchives();
      console.log("Games: ", games);
      let this_months_games = await chessAPI.getArchivesByMonth(year, month);
      setRecentGames(this_months_games);
      console.log("Games This Month: ", this_months_games);
    };
    if (chessAPI) load();
  }, [chessAPI]);

  return (
    <div className="app">
      {profile && stats && recentGames && (
        <>
          <ProfileCard profile={profile} />
          <StatContainer direction="flex" justify={"space-evenly"}>
            <RatingCard format="Blitz" stats={stats.chess_blitz} />
            <RatingCard format="Bullet" stats={stats.chess_bullet} />
            <RatingCard format="Rapid" stats={stats.chess_rapid} />
            <RatingCard format="Tactics" stats={stats.tactics} />
          </StatContainer>
          <StatContainer direction="column">
            <div className="table-expand">
              <span>Game History</span>
              <FaChevronRight />
            </div>
            <div className="table-head"></div>
          </StatContainer>
        </>
      )}
    </div>
  );
}

export default App;
