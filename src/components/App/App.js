import React, { useEffect, useState } from "react";
import "./App.css";
import "../../vendor/fonts.css";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        username={username}
      />
    </div>
  );
}

export default App;
