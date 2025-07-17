import React from "react";

const Header = () => {
  return (
    <header className="text-4x mb-8 bg-gray-500 text-white p-4 rounded-full shadow-lg">
        <nav className="flex p-4 space-x-20">
            <a className="font-bold text-2xl" href="/">Home</a>
            <a className="font-bold text-2xl" href="/about">Genres</a>
            <a className="font-bold text-2xl" href="/services">Services</a>
            <a className="font-bold text-2xl" href="/contact">Contact</a>
        </nav>
    </header>
  );
};

export default Header;