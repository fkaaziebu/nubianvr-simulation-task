import Frame from "@/components/Frame";
import Modal from "@/components/Modal";
import React from "react";

async function getData(id: string) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
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
  imgSrc: string;
};

const PhotoModal = async ({ params: { id } }: { params: { id: string } }) => {
  const results: any = await getData(id);

  const profile: Profile = {
    id: id,
    name: results.name,
    url: results.url,
    hair_color: results.hair_color,
    imgSrc: `https://picsum.photos/id/${id}/300/400`,
  };

  return (
    <Modal>
      <Frame profile={profile} />
    </Modal>
  );
};

export default PhotoModal;
