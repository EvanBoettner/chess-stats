import React from "react";
import "../styles/StatContainer.css";

function StatContainer({ children, direction, justify, align }) {
  return (
    <div
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
      className="stat-container"
    >
      {children}
    </div>
  );
}

export default StatContainer;
