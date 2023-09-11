import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flexCenter navbar">
      <h1 className="text-white text-4xl">
        <Link href={`/`}>Characters of the Star Wars Universe</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
