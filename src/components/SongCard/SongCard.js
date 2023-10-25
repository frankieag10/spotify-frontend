import React, { useEffect, useState } from "react";
import "./SongCards.css";
import SongCard from "../SongCard/SongCard";
import Preloader from "../Preloader/Preloader";
import spotify from "../../utils/spotify";

export default function SongCards() {
  const [songs, setSongs] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  return (
    <div className="error__message-container">
      <p className="error__message">
        An error occurred while processing your request. This could be due to a connectivity problem or server unavailability. please try again thank
        you.
      </p>
    </div>
  );
  if (!songs.length) {
    return Preloader();
  } else {
    return (
      <div>
        <div className={"song-cards " + className}>
          {(songs.slice(0, visibleSongs) || []).map((song) => (
            <SongCard
              key={song.trackId}
              song={song}
              selectSong={selectSong}
            />
          ))}
        </div>
      </div>
    );
  }
}
