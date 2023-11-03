import React, { useState } from "react";
import Layout from "./src/components/layout/Layout";
import ToolBar from "./src/components/home/ToolBar";
import Manager from "./src/components/home/Manager";
import { TodoDataProvider } from "./src/contexts/DataContexts";

export default function App() {
  const [display, setDisplay] = useState("all"); // pending, done, all
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const changeTheme = () => setDarkTheme(!darkTheme);
  return (
    <div>
      <TodoDataProvider>
        <Layout changeTheme={changeTheme} darkTheme={darkTheme}>
          <ToolBar
            display={display}
            setDisplay={setDisplay}
            important={important}
            setImportant={setImportant}
            searchText={searchText}
            setSearchText={setSearchText}
          >
            <Manager
              display={display}
              important={important}
              searchText={searchText}
              darkTheme={darkTheme}
            />
          </ToolBar>
        </Layout>
      </TodoDataProvider>
    </div>
  );
}
