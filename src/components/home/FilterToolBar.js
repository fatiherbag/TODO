import React from "react";

export default function FilterToolBar({
  display,
  setDisplay,
  important,
  setImportant,
  searchText,
  setSearchText,
}) {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <div className="filters">
            <li className="nav-item">
              <input
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
                type="text"
                className="form-search-text"
                placeholder="Search"
              />
            </li>
            <li className="nav-item">
              <a
                className={display === "all" ? "nav-link active" : "nav-link"}
                onClick={() => setDisplay("all")}
                href="#"
              >
                All
              </a>
            </li>
            <li>
              <a
                className={
                  display === "pending" ? "nav-link active" : "nav-link"
                }
                onClick={() => setDisplay("pending")}
                href="#"
              >
                Pending
              </a>
            </li>
            <li>
              <a
                className={display === "done" ? "nav-link active" : "nav-link"}
                onClick={() => setDisplay("done")}
                href="#"
              >
                Done
              </a>
            </li>
          </div>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="important-checkbox-toggle-id"
              checked={important}
              onChange={() =>
                setImportant((prev) => {
                  return !prev;
                })
              }
            />
            <label
              className="form-check-label"
              htmlFor="important-checkbox-toggle-id"
            >
              Important
            </label>
          </div>
        </ul>
      </div>
    </nav>
  );
}
