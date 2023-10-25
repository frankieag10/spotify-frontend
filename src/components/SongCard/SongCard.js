import React, { useEffect, useState } from "react";
import "./SongCards.css";
import SongCard from "../SongCard/SongCard";
import Preloader from "../Preloader/Preloader";
import spotify from "../../utils/spotify";

export default function SongCards() {
  return (
    <div className="error__message-container">
      <p className="error__message">
        An error occurred while processing your request. This could be due to a connectivity problem or server unavailability. please try again thank
        you.
      </p>
    </div>
  );
}
