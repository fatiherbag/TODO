import React from "react";

export default function Header({ darkTheme, changeTheme }) {
  return (
    <header>
      <h2>TO-DO List</h2>
      <span className="nav-item">
        <input
          checked={darkTheme === true}
          type="checkbox"
          className="theme-toggle-checkbox"
          autoComplete="off"
          id="toggleThemeID"
          onChange={() => {
            changeTheme();
          }}
        />
        <label htmlFor="toggleThemeID" className="theme-toggle-checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </span>
    </header>
  );
}
