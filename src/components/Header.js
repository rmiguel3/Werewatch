import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="/" className="logo-link">
          <img src="/logo.png" alt="Werewatch logo" className="logo-image" />
        </a>

        <div className="nav-links" role="navigation" aria-label="main">
          <a href="/" className="nav-link">Home</a>
          <a href="/genres" className="nav-link">Genres</a>
          <a href="/search" className="nav-link">Search</a>
          <a href="/streamers" className="nav-link">Streamers</a>
          <a href="/watchlist" className="nav-link">Watchlist</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;