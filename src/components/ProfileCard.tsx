import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  name: string;
  id: string;
  url: string;
  hair_color: string;
};
const ProfileCard = ({ data }: { data: Props[] }) => {
  return (
    <div className="img-container">
      {data.map(({ name, id, hair_color }) => (
        <Link
          key={id}
          href={`/photos/${id}`}
          className="relative hover:transform transition ease-out duration-500 hover:scale-105 hover:z-30"
        >
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
  );
};

export default ProfileCard;
