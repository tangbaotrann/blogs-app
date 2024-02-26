"use client";

import Link from "next/link";

import styles from "./Navbar.module.css";
import Image from "../Image/Image";
import images from "@/public/assets";
import MenuLink from "./MenuLink/MenuLink";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import routes from "@/routes";
import paths from "@/routes/paths";

function Navbar() {
  const pathName = usePathname();

  // Testing... login page
  const session = true;
  const isAdmin = false;

  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src={images.logo.src}
          alt={images.logo.alt}
          className={styles.logo}
        />
      </Link>

      <ul className={styles.menus}>
        {routes.map((item) => (
          <li key={item.name}>
            <MenuLink item={item} pathName={pathName} />
          </li>
        ))}

        {session ? (
          <>
            {isAdmin && (
              <MenuLink
                item={{
                  path: paths.ADMIN_PAGE.url,
                  name: paths.ADMIN_PAGE.name,
                }}
              />
            )}
            <Button danger large borderRadius>
              Logout
            </Button>
          </>
        ) : (
          <MenuLink
            item={{ path: paths.LOGIN_PAGE.url, name: paths.LOGIN_PAGE.name }}
          >
            Login
          </MenuLink>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
