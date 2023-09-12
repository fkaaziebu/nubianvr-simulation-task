"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Modal from "@/components/Modal";
import React from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => {} }) => {
  return (
    <Modal>
      <div className="flex justify-center content-center">
        <div className="flex justify-center content-center bg-red-400 text-white p-5 rounded-lg gap-4">
          <h2>{error.name}:</h2>
          <p>Failed to fetch data, reload page!</p>
        </div>
      </div>
    </Modal>
  );
};

export default Error;
