import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation({ loggedIn, username }) {
  if (loggedIn) {
    return (
      <nav className="navbar">
        <div className="navbar__container">
          <Link
            to="/"
            className="navbar__link"
          >
            {username}
          </Link>
          <Link
            to="/top-songs"
            className="navbar__link"
          >
<<<<<<< HEAD
            Your Top Tracks
=======
            Top Tracks
>>>>>>> api-stage
          </Link>
          <Link
            to="/top-10-recommend"
            className="navbar__link"
          >
            Top Recommended
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <div className="navbar">
        <p></p>
      </div>
    );
  }
}
