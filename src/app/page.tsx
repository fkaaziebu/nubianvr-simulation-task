import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "@/photos";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h2 className="title">Star Wars Characters</h2>
      <div className="img-container">
        {data.map(({ id, username, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt={username}
              src={imageSrc}
              height={500}
              width={500}
              className="img-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
