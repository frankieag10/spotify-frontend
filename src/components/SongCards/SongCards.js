import React, { useEffect, useState } from "react";
import "./SongCards.css";
import SongCard from "../SongCard/SongCard";
import Preloader from "../Preloader/Preloader";
import spotify from "../utils/spotify";

export default function SongCards({ className, api, selectSong, visibleSongs, showMore }) {
  const [songs, setSongs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songs = await spotify[api]();

        setSongs(songs || []);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchSongs();
  }, [api]);

  if (errorMessage) {
    return (
      <div className="error__message-container">
        <p className="error__message">
          An error occurred while processing your request. This could be due to a connectivity problem or server unavailability.
        </p>
      </div>
    );
  }

  if (!songs.length) {
    return Preloader();
  } else {
    return (
      <div>
        <sections className={"song-cards " + className}>
          {(songs.slice(0, visibleSongs) || []).map((song) => (
            <SongCard
              key={song.name}
              song={song}
              selectSong={selectSong}
            />
          ))}
        </sections>
        <div className="songs__show-more-container">
          {visibleSongs < 10 ? (
            <button
              type="button"
              className="songs__show-more-button"
              onClick={showMore}
            >
              Show More...
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
