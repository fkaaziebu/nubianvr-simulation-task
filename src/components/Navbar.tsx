import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexCenter navbar fixed w-full top-0 z-40">
      <h1 className="text-white text-2xl md:text-4xl text-center">
        <Link href={`/`}>Characters of the Star Wars Universe</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
