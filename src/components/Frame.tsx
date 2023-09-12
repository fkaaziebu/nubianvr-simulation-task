import Image from "next/image";

type Profile = {
  id: string;
  name: string;
  url: string;
  hair_color: string;
  imgSrc: string;
};

export default function Frame({ profile }: { profile: Profile }) {
  return (
    <>
      <Image
        alt=""
        src={profile.imgSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{profile.name}</h3>
        <p>Taken by {profile.hair_color}</p>
      </div>
    </>
  );
}
