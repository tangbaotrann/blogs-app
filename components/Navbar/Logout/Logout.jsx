import Image from "next/image";

import styles from "./Logout.module.css";
import { icons } from "@/public/assets";

function Logout() {
  return (
    <>
      <Image
        src={icons.logout.src}
        alt={icons.logout.alt}
        width={16}
        height={16}
      />
      <span className={styles.logout__text}>Logout</span>
    </>
  );
}

export default Logout;
