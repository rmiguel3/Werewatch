import React from "react";

const Header = () => {
  return (
    <header className="text-4x mb-8 bg-red text-white p-4 rounded-lg h-fill">
        <nav className="flex p-4 space-x-20">
          <a href= '/'><img src="./logo.png" alt="Werewatch logo" className="h-10 w-86 object-cover" /></a>
          {[
            ['Home', '/'],
            ['Genres', '/genres'],
            ['Search', '/search'],
            ['Streamers', '/streamers'],
            ['Watchlist', '/watchlist'],
          ].map(([title, url]) => (
            <a href={url} className="font-bold text-2xl">{title}</a>
          ))}
        </nav>
    </header>
  );
};

export default Header;