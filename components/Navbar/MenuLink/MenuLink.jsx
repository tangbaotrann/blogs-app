import Link from "next/link";

import styles from "./MenuLink.module.css";

function MenuLink({ item, pathName }) {
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        item.path === pathName && styles.active
      }`}
    >
      {item.name}
    </Link>
  );
}

export default MenuLink;
