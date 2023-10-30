import React, { useEffect, useState } from "react";
import "./App.css";
//import "../../vendor/fonts.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SongModal from "../SongModal/SongModal";
import Header from "../Header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  const [profileImage, setProfileImage] = useState("");

  const selectSong = (song) => {
    setActiveModal(song);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

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
      <Footer />
      {activeModal ? (
        <SongModal
          song={activeModal}
          onClose={handleCloseModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
