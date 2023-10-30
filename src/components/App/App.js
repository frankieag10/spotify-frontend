import React, { useEffect, useState } from "react";
import "./App.css";
//import "../../vendor/fonts.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Recommended from "../Recommended/Recommended";
import TopSongs from "../TopSongs/TopSongs";
import SongModal from "../SongModal/SongModal";
import Header from "../Header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [visibleSongs, setVisibleSongs] = useState(3);

  const showMore = () => {
    setVisibleSongs((prevVisibleSongs) => prevVisibleSongs + 3);
  };

  const selectSong = (song) => {
    setActiveModal(song);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Close modal popup with Escape key
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);
  // Close modal popup with OutsideClick
  useEffect(() => {
    const closeByOutsideClick = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("mousedown", closeByOutsideClick);
    return () => document.removeEventListener("mousedown", closeByOutsideClick);
  }, []);

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
      <TopSongs
        selectSong={selectSong}
        onClick={() => setVisibleSongs((prevVisibleSongs) => prevVisibleSongs + 3)}
        visibleSongs={visibleSongs}
        showMore={showMore}
      />
      <Recommended
        selectSong={selectSong}
        onClick={() => setVisibleSongs((prevVisibleSongs) => prevVisibleSongs + 3)}
        visibleSongs={visibleSongs}
        showMore={showMore}
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
