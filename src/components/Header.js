import React from "react";

const Header = ({ darkMode }) => {
  const toggleDark = () => {
    darkMode((mode) => !mode);
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={toggleDark}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
