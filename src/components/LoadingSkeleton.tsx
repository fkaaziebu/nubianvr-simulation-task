import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import { TailSpin } from "react-loading-icons";

const LoadingSkeleton = () => {
  return (
    <Modal>
      <div className="flex justify-center content-center w-full h-full">
        {/* <Image
          className="animate-ping"
          src="/eye.svg"
          width={115}
          height={43}
          alt="Flexibble"
        /> */}
        <TailSpin />
      </div>
    </Modal>
  );
};

export default LoadingSkeleton;
