import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "@/photos";
import Pagination from "@/components/Pagination";

async function getData(page: string = "1") {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Profile = {
  id: string;
  name: string;
  url: string;
  hair_color: string;
};

type Props = {
  searchParams: {
    page: string;
  };
};

const Home = async ({ searchParams: { page } }: Props) => {
  const results: any = await getData(page);
  const data: Profile[] = results.results.map(
    ({
      name,
      url,
      hair_color,
    }: {
      name: string;
      url: string;
      hair_color: string;
    }) => ({
      name: name,
      url,
      id: url.slice(29, -1),
      hair_color: hair_color,
    })
  );

  return (
    <div className="container mx-auto">
      <h2 className="title text-items-title">Star Wars Characters</h2>
      <Pagination count={Math.ceil(results?.count / 10)} />
      <div className="img-container">
        {data.map(({ name, id, url, hair_color }) => (
          <Link key={id} href={`/photos/${id}`} className="relative">
            <Image
              alt=""
              src={`https://picsum.photos/id/${id}/200/300`}
              height={500}
              width={500}
              className="img-cover"
            />

            <div className="img-description">
              <h3 className="img-description_name">{name}</h3>
              <h4 className="img-description_position">{hair_color}</h4>
              <p className="img-description_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, corporis!
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination count={Math.ceil(results?.count / 10)} />
    </div>
  );
};

export default Home;
