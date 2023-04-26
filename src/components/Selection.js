import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState({ background: "" });

  const handleClick = () => {
    setBackground({ background: applyColor });
  };

  return (
    <div className="fix-box" style={background} onClick={handleClick}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;

