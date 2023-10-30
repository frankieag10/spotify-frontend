import React from "react";
import "./SongCard.css";

export default function SongCard() {
  return (
    <div className="song-card">
      <img className="song-card__image" />
      <div className="song-card__name-container">
        <p className="song-card__name"></p>
      </div>
    </div>
  );
}
