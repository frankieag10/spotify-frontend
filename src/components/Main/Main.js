import React from "react";
import "./Main.css";
import "normalize.css";
import spotifyicon from "../../images/spotify-icon.svg";
import spotify from "../utils/spotify";

export default function Main({ loggedIn, profileImage }) {
  const button = loggedIn ? (
    <a
      className="main__login"
      href="#"
      onClick={() => spotify.logout()}
    >
      Logout
    </a>
  ) : (
    <a
      className="main__login"
      href="#"
      onClick={() => spotify.login()}
    >
      Login to Spotify
    </a>
  );

  const img = loggedIn && profileImage !== "" && profileImage ? profileImage : spotifyicon;

  return (
    <div>
      <section className="main">
        <img
          className="main__music-note"
          src={img}
          alt="music note"
        ></img>
        {button}
        <p className="main__caption">Login to Spotify to see your Top Played Tracks and get Recommendations based on your Top Tracks</p>
      </section>
      {/* <About /> */}
    </div>
  );
}
