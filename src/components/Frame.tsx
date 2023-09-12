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
        <h3 className="text-3xl font-semibold">{profile.name}</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
          quibusdam! {profile.hair_color}
        </p>
      </div>
    </>
  );
}
