import React from "react";
import "./SongCard.css";

export default function SongCard({ song, selectSong }) {
  return (
    <div
      className="song-card"
      onClick={() => selectSong(song)}
    >
      <img
        className="song-card__image"
        src={song.image}
        alt={song.image}
      />
      <section className="song-card__name-container">
        <p className="song-card__name">{song.name}</p>
      </section>
    </div>
  );
}
