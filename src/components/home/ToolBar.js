import React from "react";
import FilterToolBar from "./FilterToolBar";

export default function ToolBar({
  display,
  setDisplay,
  important,
  setImportant,
  searchText,
  setSearchText,
  children,
}) {
  return (
    <div>
      <FilterToolBar
        display={display}
        setDisplay={setDisplay}
        important={important}
        setImportant={setImportant}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {children}
    </div>
  );
}
