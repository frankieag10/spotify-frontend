import React, { useEffect, useState } from "react";
import "./App.css";
//import "../../vendor/fonts.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");

  const [profileImage, setProfileImage] = useState("");

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        username={username}
      />
      <Main
        loggedIn={loggedIn}
        profileImage={profileImage}
      />
    </div>
  );
}

export default App;
