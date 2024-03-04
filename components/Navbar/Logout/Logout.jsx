import Image from "next/image";

import styles from "./Logout.module.css";
import { icons } from "@/public/assets";
import Form from "@/components/Form/Form";
import { logoutUser } from "@/lib/actions";
import Button from "@/components/Button/Button";

function Logout() {
  return (
    <Form title="Logout" action={logoutUser} suppressHydrationWarning>
      <Button danger large borderRadius>
        <Image
          src={icons.logout.src}
          alt={icons.logout.alt}
          width={16}
          height={16}
        />
        <span className={styles.logout__text}>Logout</span>
      </Button>
    </Form>
  );
}

export default Logout;
