import { icons } from "@/public/assets";
import Link from "next/link";
import Image from "next/image";

function NotFound() {
  return (
    <div className="page__not_found">
      <h1>404. Page not found!!</h1>

      <div className="back__home_icon">
        <Link href="/">
          <Image
            src={icons.notFound.src}
            alt={icons.notFound.alt}
            width={42}
            height={42}
          />
          <span className="back__home_text">Back to home.</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
