"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ImageNext from "next/image";

import styles from "./Navbar.module.css";
import Image from "../Image/Image";
import images, { icons } from "@/public/assets";
import MenuLink from "./MenuLink/MenuLink";
import Button from "../Button/Button";
import routes from "@/routes";
import paths from "@/routes/paths";
import Logout from "./Logout/Logout";

function Navbar() {
  const pathName = usePathname();

  const [navbarMobile, setNavbarMobile] = useState(false);

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
            <Button danger large borderRadius className={styles.btn__logout}>
              <Logout />
            </Button>
          </>
        ) : (
          <MenuLink
            item={{ path: paths.LOGIN_PAGE.url, name: paths.LOGIN_PAGE.name }}
          >
            Login
          </MenuLink>
        )}

        {/* Navbar Mobile */}
        <ImageNext
          src={icons.menuMobile.src}
          alt={icons.menuMobile.alt}
          style={{ color: "white", cursor: "pointer" }}
          width={42}
          height={42}
          onClick={() => setNavbarMobile((prev) => !prev)}
          className={styles.menu__mobile}
        />

        {navbarMobile && (
          <div className={styles.navbar__menu_mobile}>
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
                <Button
                  danger
                  large
                  borderRadius
                  className={styles.btn__logout}
                >
                  <Logout />
                </Button>
              </>
            ) : (
              <MenuLink
                item={{
                  path: paths.LOGIN_PAGE.url,
                  name: paths.LOGIN_PAGE.name,
                }}
              >
                Login
              </MenuLink>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
