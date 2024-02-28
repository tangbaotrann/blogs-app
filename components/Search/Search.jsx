import ImageNext from "next/image";

import styles from "./Search.module.css";
import Input from "../Input/Input";
import { icons } from "@/public/assets";

function Search({ placeholder }) {
  return (
    <div className={styles.search}>
      <ImageNext
        src={icons.search.src}
        alt={icons.search.alt}
        width={24}
        height={24}
        className={styles.search__icon}
      />
      <Input
        type="text"
        name="search"
        placeholder={placeholder}
        className={styles.search__inp}
        primary
        large
        borderRadius
      />
    </div>
  );
}

export default Search;
