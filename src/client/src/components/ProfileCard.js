import React, { useEffect } from "react";
import "../styles/ProfileCard.css";
import { GoTrophy, GoPeople } from "react-icons/go";

function ProfileCard({ profile }) {
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <div className="profile-card">
      <div className="avatar">
        <a href={profile?.url} target="_blank">
          <img
            src="https://www.chess.com/bundles/web/images/noavatar_l.84a92436@2x.gif"
            alt="avatar"
          />
        </a>
      </div>
      <div className="player-info">
        <span className="username">{profile?.username?.toUpperCase()}</span>
        <div className="icon-list">
          <span className="icon-item">
            Last Online: <br /> 🗓️{" "}
            {new Date(profile?.last_online * 1000).toLocaleDateString()}
          </span>
          <span className="icon-item">
            Account Created: <br /> 🗓️{" "}
            {new Date(profile?.joined * 1000).toLocaleDateString()}
          </span>
          <span className="icon-item">
            Followers: <br /> <GoPeople /> {profile?.followers}
          </span>
          <span className="icon-item">
            League: <br />{" "}
            <GoTrophy
              color={
                profile?.league === "Bronze"
                  ? "#CD7F32"
                  : profile?.league === "Stone"
                  ? "#e3cba5"
                  : profile?.league === "Gold"
                  ? "#FFD700"
                  : profile?.league === "Silver"
                  ? "#C0C0C0"
                  : profile?.league === "Elite"
                  ? "#ff6352"
                  : "#ffffff"
              }
            />{" "}
            {profile?.league}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
