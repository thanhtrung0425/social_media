import React from "react";
import "./App.css"
import Contacts from "./Contacs/Contacts";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Login from "./Login/Login"
function App() {
  const user = null;
  function Check(st) {

  }

  return (
    <div className="app">
      <Login/>
      {/* <>
        <Header />
        <div className="app_body">
          <SideBar />
          <Feed />
          <Contacts />
        </div>
      </> */}
    </div>
  );
}

export default App;
