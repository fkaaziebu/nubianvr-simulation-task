import React from "react";
import Pagination from "@/components/Pagination";
import ProfileCard from "@/components/ProfileCard";
import { getData } from "@/lib/action";
import { Profile } from "../../common.types";
import LoadingSkeleton from "@/components/LoadingSkeleton";

type Props = {
  searchParams: {
    page: string;
  };
};

export const revalidate = 10;

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

  const totalPages = Math.ceil(results?.count / 10);

  return (
    <div className="container mx-auto">
      <h2 className="title">Star Wars Characters</h2>
      {data.length !== 0 ? (
        <>
          <Pagination maxPage={totalPages} />
          <ProfileCard data={data} />
          <Pagination maxPage={totalPages} />
        </>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};

export default Home;
