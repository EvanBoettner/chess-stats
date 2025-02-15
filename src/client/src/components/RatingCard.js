import React from "react";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";
import "../styles/RatingCard.css";
import Icon from "./Icon";

function RatingCard({ format, stats }) {
  const Arrow = ({ direction }) => {
    switch (direction) {
      case "Up": {
        return <VscArrowSmallUp className={direction} />;
      }
      case "Down": {
        return <VscArrowSmallDown className={direction} />;
      }
      default:
        return;
    }
  };
  return (
    <div className="r-card">
      <span className="r-icon">
        <Icon style={format} /> {stats?.last?.rating || stats?.highest?.rating}{" "}
        {format != "Tactics" && (
          <Arrow
            direction={
              stats?.last?.rating === stats?.best?.rating ? "Up" : "Down"
            }
          />
        )}
      </span>
    </div>
  );
}

export default RatingCard;
