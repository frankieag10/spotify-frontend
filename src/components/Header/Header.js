import React from "react";
import "./Header.css";

export default function Header({ loggedIn, username }) {
  return (
    <header className="header">
      <a
        className="header__icon"
        href="#"
      >
        <img
          src={spotifyIcon}
          alt="spotify icon"
        />
      </a>
    </header>
  );
}
