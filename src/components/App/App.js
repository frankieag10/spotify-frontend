import React, { useEffect, useState } from "react";
import "./App.css";
//import "../../vendor/fonts.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Recommended from "../Recommended/Recommended";
import TopSongs from "../TopSongs/TopSongs";
import SongModal from "../SongModal/SongModal";
import Header from "../Header/Header";
import spotify from "../utils/spotify";

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

  useEffect(() => {
    const fetchUser = async () => {
      spotify.onLogIn = setLoggedIn;
      await spotify.init();
      const profile = await spotify.profile();
      console.log("Fetched user profile:", profile);
      setUserName(profile?.display_name);

      if (profile?.images.length > 0) {
        setProfileImage(profile.images[0].url);
      }
    };
    fetchUser();
  }, []);

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
    <HashRouter>
      <div className="app">
        <Header
          loggedIn={loggedIn}
          username={username}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                profileImage={profileImage}
              />
            }
          />
          <Route
            path="/top-songs"
            element={
              <TopSongs
                selectSong={selectSong}
                visibleSongs={visibleSongs}
                showMore={showMore}
              />
            }
          />
          <Route
            path="/top-10-recommend"
            element={
              <Recommended
                selectSong={selectSong}
                visibleSongs={visibleSongs}
                showMore={showMore}
              />
            }
          />
        </Routes>

        {activeModal ? (
          <SongModal
            song={activeModal}
            onClose={handleCloseModal}
          />
        ) : null}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
