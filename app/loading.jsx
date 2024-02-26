import { icons } from "@/public/assets";
import Image from "next/image";

function Loading() {
  return (
    <div className="loading__page">
      <Image
        src={icons.loading.src}
        alt={icons.loading.alt}
        width={62}
        height={62}
      />
    </div>
  );
}

export default Loading;
