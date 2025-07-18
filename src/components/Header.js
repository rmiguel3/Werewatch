import React from "react";

const Header = () => {
  return (
    <header className="text-4x mb-8 bg-gray-500 text-white p-4 rounded-full shadow-xl">
        <nav className="flex p-4 space-x-20">
          <img src="./logo.png" alt="" className="h-10 w-96 object-cover" ></img>
          {[
            ['Home', '/homePage'],
            ['Genres', '/genres'],
            ['About', '/about'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <a href={url} className="font-bold text-2xl">{title}</a>
          ))}
        </nav>
    </header>
  );
};

export default Header;