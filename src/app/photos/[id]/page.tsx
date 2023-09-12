import Frame from "@/components/Frame";
import { Profile } from "../../../../common.types";
import { getSingleData } from "@/lib/action";

interface ProfileInfo extends Profile {
  imgSrc: string;
}

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const results: any = await getSingleData(id);

  const user: ProfileInfo = {
    id: id,
    name: results.name,
    url: results.url,
    hair_color: results.hair_color,
    imgSrc: `https://picsum.photos/id/${id}/300/400`,
  };

  return (
    <div className="container mx-auto mt-[80px]">
      <div className="w-[98%] sm:w-1/2 mx-auto border border-gray-700">
        <Frame profile={user} />
      </div>
    </div>
  );
}
