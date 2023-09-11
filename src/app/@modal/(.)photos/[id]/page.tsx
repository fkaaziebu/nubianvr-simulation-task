import Frame from "@/components/Frame";
import Modal from "@/components/Modal";
import React from "react";
import photos, { Photo } from "@/photos";

const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {

  const photo: Photo = photos.find((p) => p.id === photoId)!;

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
};

export default PhotoModal;
