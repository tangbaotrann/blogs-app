"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ImageNext from "next/image";

import styles from "./Navbar.module.css";
import Image from "../Image/Image";
import images, { icons } from "@/public/assets";
import MenuLink from "./MenuLink/MenuLink";
import Button from "../Button/Button";
import routes from "@/routes";
import paths from "@/routes/paths";
import Logout from "./Logout/Logout";
import Search from "../Search/Search";

function Navbar() {
  const pathName = usePathname();

  const [navbarMobile, setNavbarMobile] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  // Testing... login page
  const session = true;
  const isAdmin = true;

  return (
    <div
      className={`${scroll >= 20 ? styles.containerScroll : styles.container}`}
    >
      <Link href="/">
        <Image
          src={images.logo.src}
          alt={images.logo.alt}
          className={styles.logo}
        />
      </Link>

      {/* Search blog only */}
      {pathName === paths.BLOG_PAGE.url && (
        <div className={styles.search}>
          <Search scroll={scroll} placeholder="Search title blog here..." />
        </div>
      )}

      <ul className={styles.menus}>
        {routes.map((item) => (
          <li key={item.name}>
            <MenuLink item={item} pathName={pathName} />
          </li>
        ))}

        {session ? (
          <>
            <div className={styles.admin}>
              {isAdmin && (
                <MenuLink
                  item={{
                    path: paths.ADMIN_PAGE.url,
                    name: paths.ADMIN_PAGE.name,
                  }}
                  pathName={pathName}
                />
              )}
            </div>
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

        {/* Search blog only with navbar mobile */}
        {pathName === paths.BLOG_PAGE.url && (
          <div className={styles.search__mobile}>
            <Search scroll={scroll} placeholder="Search title blog here..." />
          </div>
        )}

        {/* Navbar Mobile */}
        <ImageNext
          src={icons.menuMobile.src}
          alt={icons.menuMobile.alt}
          width={42}
          height={42}
          onClick={() => setNavbarMobile((prev) => !prev)}
          className={styles.menu__mobile}
        />

        {navbarMobile && (
          <div className={styles.navbar__menu_mobile}>
            {/* Icons exit */}
            <div className={styles.icon__exit}>
              <ImageNext
                src={icons.close.src}
                alt={icons.close.alt}
                width={26}
                height={26}
                onClick={() => setNavbarMobile((prev) => !prev)}
              />
            </div>

            {/* Search blog only with navbar mobile */}
            {pathName === paths.BLOG_PAGE.url && (
              <div className={styles.search___mobile__in_menu}>
                <Search
                  scroll={scroll}
                  placeholder="Search title blog here..."
                />
              </div>
            )}

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
                    pathName={pathName}
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
