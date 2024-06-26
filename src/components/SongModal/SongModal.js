import React from "react";
import "./SongModal.css";

export default function SongModal({ song, onClose }) {
  return (
    <div className="modal">
      <section className="modal__container">
        <button
          className="modal__songcard-popup-close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__songcard-popup-image"
          src={song.image}
          alt={song.name}
        />
        <article className="modal__songcard-popup-caption">
          <p className="modal__songcard-popup-text">Song Name: {song.name}</p>
          <p className="modal__songcard-popup-text">Artist Name: {song.artist}</p>
        </article>
      </section>
    </div>
  );
}
