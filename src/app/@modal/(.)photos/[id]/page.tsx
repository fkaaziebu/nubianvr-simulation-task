import Frame from "@/components/Frame";
import Modal from "@/components/Modal";
import React from "react";
import { Profile } from "../../../../../common.types";
import { getSingleData } from "@/lib/action";

interface ProfileInfo extends Profile {
  imgSrc: string;
}

const PhotoModal = async ({ params: { id } }: { params: { id: string } }) => {
  const results: any = await getSingleData(id);

  const user: ProfileInfo = {
    id: id,
    name: results.name,
    url: results.url,
    hair_color: results.hair_color,
    imgSrc: `https://picsum.photos/id/${id}/300/400`,
  };

  return (
    <Modal>
      <Frame profile={user} />
    </Modal>
  );
};

export default PhotoModal;
